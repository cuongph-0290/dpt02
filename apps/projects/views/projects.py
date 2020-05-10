from django.http import JsonResponse
from django.forms.models import model_to_dict

from ..models import Project

def projectsList(request):
  projects = Project.objects.all()

  return JsonResponse({
      'projects': [model_to_dict(projects[i]) for i in range(len(projects))]
    })
