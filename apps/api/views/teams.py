from django.views.generic import ListView
from apps.core.views import PaginateMixin, SearchAbleMixin

from apps.projects.models import Team

class TeamListView(PaginateMixin, SearchAbleMixin, ListView):
  paginate_by = 4
  model = Team
