FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY ["cs-backend.csproj", "./"] 
RUN dotnet restore "cs-backend.csproj"  # Restaura las dependencias

COPY . . 
RUN dotnet build -c Release -o /app/build 

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /app/build .

EXPOSE 5001

ENTRYPOINT ["dotnet", "cs-backend.dll"]  # Comando de inicio
