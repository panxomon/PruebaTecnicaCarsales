namespace rym.domain
{
    public interface IRepository<T>
    {
        Task<T> GetAsync(string url);
    }

}