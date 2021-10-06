using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using backend.Data;
using backend.Models;

namespace backend.Controllers
{
    public class ProcessesController : Controller
    {
        private readonly backendContext _context;

        public ProcessesController(backendContext context)
        {
            _context = context;
        }

        // GET: Processes
        public async Task<IActionResult> Index()
        {
            var backendContext = _context.Process.Include(p => p.Bank).Include(p => p.Entity).Include(p => p.HouseType);
            return View(await backendContext.ToListAsync());
        }

        // GET: Processes/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var process = await _context.Process
                .Include(p => p.Bank)
                .Include(p => p.Entity)
                .Include(p => p.HouseType)
                .FirstOrDefaultAsync(m => m.ProcessId == id);
            if (process == null)
            {
                return NotFound();
            }

            return View(process);
        }

        // GET: Processes/Create
        public IActionResult Create()
        {
            ViewData["BankId"] = new SelectList(_context.Set<Bank>(), "BankId", "BankName");
            ViewData["EntityId"] = new SelectList(_context.Set<Entity>(), "EntityId", "EntityName");
            ViewData["HouseTypeId"] = new SelectList(_context.Set<HouseType>(), "HouseTypeId", "HouseTypeName");
            return View();
        }

        // POST: Processes/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("ProcessId,VRef,AppraiserName,VisitInterior,BankId,EntityId,HouseTypeId")] Process process)
        {
            if (ModelState.IsValid)
            {
                _context.Add(process);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["BankId"] = new SelectList(_context.Set<Bank>(), "BankId", "BankName", process.BankId);
            ViewData["EntityId"] = new SelectList(_context.Set<Entity>(), "EntityId", "EntityName", process.EntityId);
            ViewData["HouseTypeId"] = new SelectList(_context.Set<HouseType>(), "HouseTypeId", "HouseTypeName", process.HouseTypeId);
            return View(process);
        }

        // GET: Processes/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var process = await _context.Process.FindAsync(id);
            if (process == null)
            {
                return NotFound();
            }
            ViewData["BankId"] = new SelectList(_context.Set<Bank>(), "BankId", "BankName", process.BankId);
            ViewData["EntityId"] = new SelectList(_context.Set<Entity>(), "EntityId", "EntityName", process.EntityId);
            ViewData["HouseTypeId"] = new SelectList(_context.Set<HouseType>(), "HouseTypeId", "HouseTypeName", process.HouseTypeId);
            return View(process);
        }

        // POST: Processes/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("ProcessId,VRef,AppraiserName,VisitInterior,BankId,EntityId,HouseTypeId")] Process process)
        {
            if (id != process.ProcessId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(process);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ProcessExists(process.ProcessId))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["BankId"] = new SelectList(_context.Set<Bank>(), "BankId", "BankName", process.BankId);
            ViewData["EntityId"] = new SelectList(_context.Set<Entity>(), "EntityId", "EntityName", process.EntityId);
            ViewData["HouseTypeId"] = new SelectList(_context.Set<HouseType>(), "HouseTypeId", "HouseTypeName", process.HouseTypeId);
            return View(process);
        }

        // GET: Processes/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var process = await _context.Process
                .Include(p => p.Bank)
                .Include(p => p.Entity)
                .Include(p => p.HouseType)
                .FirstOrDefaultAsync(m => m.ProcessId == id);
            if (process == null)
            {
                return NotFound();
            }

            return View(process);
        }

        // POST: Processes/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var process = await _context.Process.FindAsync(id);
            _context.Process.Remove(process);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ProcessExists(int id)
        {
            return _context.Process.Any(e => e.ProcessId == id);
        }
    }
}
