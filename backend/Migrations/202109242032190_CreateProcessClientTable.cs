namespace backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreateProcessClientTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Clients",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Contact = c.String(),
                        NIF = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.Processes", "VRef", c => c.Int(nullable: false));
            AddColumn("dbo.Processes", "Entity", c => c.String());
            AddColumn("dbo.Processes", "Appraiser", c => c.String());
            AddColumn("dbo.Processes", "BankName", c => c.String());
            AddColumn("dbo.Processes", "Client_Id", c => c.Int());
            CreateIndex("dbo.Processes", "Client_Id");
            AddForeignKey("dbo.Processes", "Client_Id", "dbo.Clients", "Id");
            DropColumn("dbo.Processes", "Name");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Processes", "Name", c => c.String());
            DropForeignKey("dbo.Processes", "Client_Id", "dbo.Clients");
            DropIndex("dbo.Processes", new[] { "Client_Id" });
            DropColumn("dbo.Processes", "Client_Id");
            DropColumn("dbo.Processes", "BankName");
            DropColumn("dbo.Processes", "Appraiser");
            DropColumn("dbo.Processes", "Entity");
            DropColumn("dbo.Processes", "VRef");
            DropTable("dbo.Clients");
        }
    }
}
