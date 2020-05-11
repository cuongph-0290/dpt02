from django.http import JsonResponse
from django.core import serializers
from django.core.paginator import Paginator
from django.views.generic import ListView

class PaginateMixin(ListView):
  def post(self, request, *args, **kwargs):
    queryset = self.get_queryset()

    paginator = Paginator(queryset, self.paginate_by)
    page_number = request.POST.get('page') or 1
    page_obj = paginator.get_page(page_number)

    data = {
      'num_pages': page_obj.paginator.num_pages,
      'page_number': page_number,
      'objects': serializers.serialize('json', page_obj),
    }

    return JsonResponse(data, status=200, safe=False)
