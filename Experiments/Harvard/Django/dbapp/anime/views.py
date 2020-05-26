from django.http import HttpResponse
from django.shortcuts import render

from .models import Anime

# Create your views here.

def index(request):
	context = {
		"animee": Anime.objects.all() 
	}
	return render(request, "anime.html", context)

def anime(request, anime_id):
	try:
		anime = Anime.objects.get(pk=anime_id)
	except Anime.DoesNotExist:
		raise Http404("Anime does not exist.")
	context = {
		"anime": anime
	}
	return render(request, "oneanime.html", context)
