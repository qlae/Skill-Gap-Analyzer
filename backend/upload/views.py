from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Resume
from .serializers import ResumeSerializer
import logging

logger = logging.getLogger(__name__)

@api_view(['POST'])
def upload_resume(request):
    if request.method == 'POST':
        serializer = ResumeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            logger.info("File uploaded successfully")
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        logger.error(f"Upload failed: {serializer.errors}")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
