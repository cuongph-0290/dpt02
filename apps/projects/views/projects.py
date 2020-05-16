from django.views.generic import ListView
from apps.core.views import PaginateMixin
import json

from ..models import Project

class ProjectListView(PaginateMixin, ListView):
  paginate_by = 4
  model = Project

  def get_queryset(self):
    search_options = json.loads(
      self.request.POST.get('search_options').replace("'", "\""))

    return Project.objects.filter(**search_options)

