dotnet tool install -g docfx

Remove the _site and api folder

docfx metadata docfx.json
docfx build docfx.json --serve