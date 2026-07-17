# Build context: mega7-back/ (para poder copiar Mega7.SHARED junto con Mega7.API)
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY Mega7.SHARED/Mega7.SHARED.csproj Mega7.SHARED/
COPY Mega7.API/Mega7.API.csproj Mega7.API/
RUN dotnet restore Mega7.API/Mega7.API.csproj

COPY Mega7.SHARED/ Mega7.SHARED/
COPY Mega7.API/ Mega7.API/
RUN dotnet publish Mega7.API/Mega7.API.csproj -c Release -o /app/publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "Mega7.API.dll"]
