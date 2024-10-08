using rym.domain;
using System.Threading.Tasks;

namespace rym.application
{
    public class EpisodeService : IService
    {
        private readonly IRepository<EpisodeResponse> _episodesRepository;  
        private readonly IRepository<Result> _episodeRepository; 

        public EpisodeService(IRepository<EpisodeResponse> episodesRepository, IRepository<Result> episodeRepository)
        {
            _episodesRepository = episodesRepository;
            _episodeRepository = episodeRepository;
        }

        public async Task<EpisodeResponse> GetEpisodesAsync(int page)
        {
            string url = $"https://rickandmortyapi.com/api/episode?page={page}";
            var pageResponse = await _episodesRepository.GetAsync(url);                        
            return pageResponse;  
        }

        public async Task<Result> GetEpisodeByIdAsync(int id)
        {
            string url = $"https://rickandmortyapi.com/api/episode/{id}";
            var response = await _episodeRepository.GetAsync(url);             
            return response;
        }
    }
}
