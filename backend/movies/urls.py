from django.urls import path

from .views import (
    MoviesListView
)

app_name = "movies"


urlpatterns = [
    path('movies/', MoviesListView.as_view(), name="movies")
]
