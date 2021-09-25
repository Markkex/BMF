namespace backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddProcessFields : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Processes", "DayCreation", c => c.DateTime(nullable: false));
            AddColumn("dbo.Processes", "DayReceiving", c => c.DateTime(nullable: false));
            AddColumn("dbo.Processes", "DayVisit", c => c.DateTime(nullable: false));
            AddColumn("dbo.Processes", "DayConcluded", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Processes", "DayConcluded");
            DropColumn("dbo.Processes", "DayVisit");
            DropColumn("dbo.Processes", "DayReceiving");
            DropColumn("dbo.Processes", "DayCreation");
        }
    }
}
