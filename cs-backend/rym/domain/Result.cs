using Newtonsoft.Json;

namespace rym.domain
{
    public class Result
    {
        public int Id { get; set; }
        public string Name { get; set; }

        [JsonProperty("air_date")]
        public string AirDate { get; set; }
        public string Episode { get; set; }
        public string[] Characters { get; set; }
        public string Url { get; set; }
        public DateTime Created { get; set; }
    }
}
