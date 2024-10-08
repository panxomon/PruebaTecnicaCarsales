using rym.domain;
using System.Threading.Tasks;

namespace rym.application
{
    public class EpisodeService : IService
    {
        private readonly IRepository<EpisodeResponse> _episodeRepository;  

        public EpisodeService(IRepository<EpisodeResponse> episodeRepository)
        {
            _episodeRepository = episodeRepository;
        }

        public async Task<EpisodeResponse> GetEpisodesAsync(int page)
        {
            string url = $"https://rickandmortyapi.com/api/episode?page={page}";
            var pageResponse = await _episodeRepository.GetAsync(url);            
            
            return pageResponse;  
        }

        public async Task<Result> GetEpisodeByIdAsync(int id)
        {
            string url = $"https://rickandmortyapi.com/api/episode/{id}";
            var response = await _episodeRepository.GetAsync(url); 
            
            return response.Results?.FirstOrDefault(x => x.Id == id);
        }
    }
}
