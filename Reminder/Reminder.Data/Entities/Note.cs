using System;
using System.Collections.Generic;
using Reminder.Data.Core;

namespace Reminder.Data.Entities
{
    /// <summary>
    /// Note contains description and media item.
    /// </summary>
    public class Note : Entity
    {
        public Note()
        {
            GalleryItems = new List<GalleryItemModel>();
        }

        public string Description { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime EditDate { get; set; }

        public string UserId { get; set; }
        public AppUser User { get; set; }
        public ICollection<GalleryItemModel> GalleryItems { get; set; }
    }
}