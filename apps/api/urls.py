from django.urls import path
from . import views

urlpatterns = [
  path('projects', views.ProjectListView.as_view()),
  path('teams', views.TeamListView.as_view())
]
