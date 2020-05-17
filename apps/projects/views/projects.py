from django.views.generic import ListView
from apps.core.views import PaginateMixin, SearchAbleMixin

from ..models import Project

class ProjectListView(PaginateMixin, SearchAbleMixin, ListView):
  paginate_by = 4
  model = Project
