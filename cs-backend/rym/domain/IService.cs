using rym.domain;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace rym.domain
{
    public interface IService
    {        
        Task<EpisodeResponse> GetEpisodesAsync(int page);  
        Task<Result> GetEpisodeByIdAsync(int id);
    }
}
