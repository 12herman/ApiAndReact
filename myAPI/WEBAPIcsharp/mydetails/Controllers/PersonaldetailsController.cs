using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using mydetails.Data;
using mydetails.DTO.PersonalDetail;
using mydetails.Models;

namespace mydetails.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonaldetailsController : ControllerBase
    {
        private readonly AppDbContext _db;
        IMapper _mapper;

        //constractor
        public PersonaldetailsController(AppDbContext db, IMapper _mapper)
        {
            this._db = db;
            this._mapper = _mapper;
        }

        [HttpGet]
        public IActionResult Get()
        {
            List<PersonalDetails> personalDetails = new List<PersonalDetails>();
            personalDetails = _db.PersonalDetails.ToList();
            return Ok(personalDetails);
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            PersonalDetails personalDetails = _db.PersonalDetails.FirstOrDefault(x => x.Id == id);
            return Ok(personalDetails);
        }

        [HttpPost]
        public IActionResult Create([FromBody] CreatePersonalDetailsDto createpersonaldetails)
        {
            var personaldetails = _mapper.Map<PersonalDetails>(createpersonaldetails);
            _db.Add(personaldetails);
            _db.SaveChanges();
            return Ok(personaldetails);
        }

        [HttpPut("{id:int}")]
        public IActionResult Edit(int id, [FromBody] UpdatePersonalDetailsDto updatePersonalDetailsDto)
        {
            if(updatePersonalDetailsDto == null || id != updatePersonalDetailsDto.Id)
            {
                return BadRequest(ModelState);
            }

            var personalDetails = _mapper.Map<PersonalDetails>(updatePersonalDetailsDto);
            _db.Update(personalDetails);
            _db.SaveChanges();
            return Ok(personalDetails);
        }

        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id) 
        {
            if(id == null) 
            { 
            return BadRequest(ModelState);
            }
            var personalDetails = _db.PersonalDetails.FirstOrDefault(x=>x.Id == id);
            _db.Remove(personalDetails);
            _db.SaveChanges();
            return Ok();
        }

    }
}

/*
[3:12 PM] Mohammed Hamthaan
[HttpPost]


        public async Task<IActionResult> AddProduct(Product product)

{

    _appDbContext.Product.Add(product);

    await _appDbContext.SaveChangesAsync();

    return Ok(product);

}

[HttpGet]

public async Task<IActionResult> GetAll()

{

    var product = await _appDbContext.Product.ToListAsync();

    return Ok(product);

}

[HttpPut("{id:int}")]

public async Task<IActionResult> UpdateProduct(Product productupdate)

{

    _appDbContext.Entry(productupdate).State = EntityState.Modified;

    await _appDbContext.SaveChangesAsync();

    return Ok(productupdate);

}

[HttpDelete("{id:int}")]

public bool DeleteStudent(int id)

{

    bool a = false;

    var product = _appDbContext.Product.Find(id);

    if (product != null)

    {

        a = true;

        _appDbContext.Entry(product).State = EntityState.Deleted;

        _appDbContext.SaveChangesAsync();

    }

    else

    {

        a = false;

    }

    return a;

}

    }
*/