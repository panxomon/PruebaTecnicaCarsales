using Newtonsoft.Json;
using rym.domain;

namespace rym.infrastructure
{
    public class HttpRepository<T> : IRepository<T>
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public HttpRepository(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public async Task<T> GetAsync(string url)
        {
            using (var client = _httpClientFactory.CreateClient())
            {
                var response = await client.GetAsync(url);

                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();
                    return JsonConvert.DeserializeObject<T>(content);
                }

                return default; 
            }
        }
    }
}
