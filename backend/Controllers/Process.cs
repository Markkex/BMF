using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Newtonsoft.Json;


namespace backend.Controllers
{
    public class Process : Controller
    {
        public static SqlConnection con = new SqlConnection("server=DESKTOP-STG54IP; database=BMF; Integrated Security=true;");
        // GET: Process
        [Route("process")]
        public string Get()
        {
            SqlDataAdapter da = new SqlDataAdapter("select * from Process", con);
            DataTable dt = new DataTable();
            da.Fill(dt);
            if (dt.Rows.Count > 0)
            {
                return JsonConvert.SerializeObject(dt);
            }
            else
            {
                return "No data was found";

            }
        }

        // GET: Process/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }



        // POST: Process/Create
        [HttpPost]
        [Route("process")]
        public string Post([FromBody] string value)
        {
            SqlCommand cmd = new SqlCommand("Insert into Process(VRef, Appraiser, Entity, SubEntity, VisitInterior, DayCreation, DayReceived, DayVisit,  ) values ('" + value + "')", con);
            con.Open();
            int i = cmd.ExecuteNonQuery();
            con.Close();
            if (i == 1)
            {
                return "Record inserted with value " + value;
            } 
            else
            {
                return "Try again. No data was inserted";
            }
        }

        // GET: Process/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Process/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: Process/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Process/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
