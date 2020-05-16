from django.views.generic import ListView
from apps.core.views import PaginateMixin

from ..models import Project

class ProjectListView(PaginateMixin, ListView):
  paginate_by = 4
  model = Project
