using AutoMapper;
using mydetails.DTO.PersonalDetail;
using mydetails.Models;

namespace mydetails.MappingProfile
{
    public class AutoMapping : Profile //inharite automapper
    {
        public AutoMapping()
        {
            CreateMap<PersonalDetails,CreatePersonalDetailsDto>().ReverseMap(); //createPersonalDetailsDto input filed sa varum api- la then ::: convert ahkum personalDetails sa
            CreateMap<PersonalDetails,UpdatePersonalDetailsDto>().ReverseMap();
        }
    }
}
