﻿using RS1_2024_25.API.Helper;

namespace RS1_2024_25.API.Data.Models
{
    public class Category : IMyBaseEntity
    {
        public int ID { get; set; }
        public string Name { get; set; }
    }
}
