using Reminder.Data.Core;

namespace Reminder.Data.Entities
{
    public class AchievementStep : Entity
    {
        public string ImageContent { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int TimeSpent { get; set; }
        public int TimeEstimation { get; set; }

        public int AchievementId { get; set; }
        public AchievementModel Achievement { get; set; }
    }
}