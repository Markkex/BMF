using backend.DAL;
using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace backend.Controllers
{
    public class ProcessController : Controller
    {
        ApplicationContext db = new ApplicationContext();
       

        // GET: ProcessController
        [HttpGet]
        [Route("/api/GetProcesses")]
        public IEnumerable<Process> GetProcesses()
        {
            return db.Processes.ToList();
        }


        // GET: ProcessController/Details/5
        [HttpGet]
        public Process Details(int id)
        {
            return db.Processes.Find(id);
        }





        // GET: ProcessController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: ProcessController/Edit/5
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

        // GET: ProcessController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: ProcessController/Delete/5
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
