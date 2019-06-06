using Reminder.Data.Core;

namespace Reminder.Data.Entities
{
    public class GalleryItemModel : Entity
    {
        public string ImagePath { get; set; }
        public string Thumbnail { get; set; }
        public bool IsVideo { get; set; }
        public string VideoPath { get; set; }
        public bool Landscape { get; set; }

        public int NoteId { get; set; }
        public Note Note { get; set; }
    }
}