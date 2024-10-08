using Microsoft.AspNetCore.Mvc;
using rym.domain;

namespace rym.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EpisodeController : ControllerBase
    {
        private readonly IService _episodeService;

        public EpisodeController(IService episodeService)
        {
            _episodeService = episodeService;
        }

        [HttpGet("page/{page}")]
        public async Task<IActionResult> GetEpisodes(int page)
        {
            var episodes = await _episodeService.GetEpisodesAsync(page);
            if (episodes == null)
            {
                return NotFound();
            }

            return Ok(episodes);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetEpisode(int id)
        {
            var episode = await _episodeService.GetEpisodeByIdAsync(id);
            if (episode == null)
            {
                return NotFound();
            }

            return Ok(episode);
        }
    }
}
