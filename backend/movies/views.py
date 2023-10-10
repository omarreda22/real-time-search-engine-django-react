from rest_framework.generics import ListCreateAPIView

from .models import Movie
from .serializers import MovieSerializers


class MoviesListView(ListCreateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializers

    def get_queryset(self, *args, **kwargs):
        qs = super().get_queryset(*args, **kwargs)
        request = self.request
        # user = request.user
        # localhost:8000/api/movies?name=***
        name = request.query_params.get("name")
        if name == 'noBody':
            return qs.none()
        return qs.filter(name__icontains=name)[:5]
