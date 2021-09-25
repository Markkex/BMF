namespace backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class HouseDetailsProcess : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.HouseDetails",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        District = c.String(),
                        County = c.String(),
                        Parish = c.String(),
                        Address = c.String(),
                        ZipCode = c.String(),
                        HouseType = c.String(),
                        latitude = c.String(),
                        longitude = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.Processes", "HouseDetails_Id", c => c.Int());
            CreateIndex("dbo.Processes", "HouseDetails_Id");
            AddForeignKey("dbo.Processes", "HouseDetails_Id", "dbo.HouseDetails", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Processes", "HouseDetails_Id", "dbo.HouseDetails");
            DropIndex("dbo.Processes", new[] { "HouseDetails_Id" });
            DropColumn("dbo.Processes", "HouseDetails_Id");
            DropTable("dbo.HouseDetails");
        }
    }
}
