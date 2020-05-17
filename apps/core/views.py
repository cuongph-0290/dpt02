from django.http import JsonResponse
from django.core import serializers
from django.core.paginator import Paginator
from django.views.generic import ListView

import json

class PaginateMixin(ListView):
  def post(self, request, *args, **kwargs):
    queryset = self.get_queryset()
    get_all = self.request.POST.get('get_all') or False

    if not get_all:
      paginator = Paginator(queryset, self.paginate_by)
      page_number = request.POST.get('page') or 1
      page_obj = paginator.get_page(page_number)

      data = {
        'num_pages': page_obj.paginator.num_pages,
        'page_number': page_number,
        'objects': serializers.serialize('json', page_obj),
      }

      return JsonResponse(data, status=200, safe=False)
    else:
      objects = self.model.objects.all()
      data = {
        'objects': serializers.serialize('json', objects)
      }

      return JsonResponse(data, status=200, safe=False)

class SearchAbleMixin(ListView):
  def get_queryset(self):
    search_options = json.loads(
      (self.request.POST.get('search_options') or '{}').replace("'", "\""))

    return self.model.objects.filter(**search_options)
