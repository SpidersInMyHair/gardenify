'''
    Growth class to store the information relating to a plantt's optimal growth.
    
    description:      A description on how the plant usually grows
    days_to_harvest:  The average numbers of days required to from planting to harvest
    growth_month:     The most active growth months of the species (usually all year round for perennial plants)
    min_precip:       Minimum rain (precipitation) per year, in mm/year
    max_precip:       Maximum rain (precipitation) per year, in mm/year
    min_temp:         Minimum tolerable temperature for the species, in degrees celsius
    max_temp:         Maximum tolerable temperature for the species, in degrees celsius
    min_ph:           The minimum acceptable soil pH (of the top 30 centimeters of soil) for the plant
    max_ph:           The maximum acceptable soil pH (of the top 30 centimeters of soil) for the plant
    light:            Required amount of light, on a scale from 0 (no light, <= 10 lux) to 10 
                        (very intensive insolation, >= 100 000 lux)
    average_height:   The average height of the species (cm)
    toxic:            Relative toxicity of the species for humans or animals, can be: none, low, medium, or high
'''
class Growth:
    def __init__(self, description='NOT_SET', days_to_harvest='NOT_SET', growth_months='NOT_SET', 
                precip_min='NOT_SET', precip_max='NOT_SET', temp_min='NOT_SET', temp_max='NOT_SET', 
                ph_min='NOT_SET', ph_max='NOT_SET', light='NOT_SET'):
        self.description = description
        self.days_to_harvest = days_to_harvest
        self.growth_months = growth_months
        self.precip_min = precip_min
        self.precip_max = precip_max
        self.temp_min = temp_min
        self.temp_max = temp_max
        self.ph_min = ph_min
        self.ph_max = ph_max
        self.light = light
    
    def set_desc(self, desc):
        self.description = desc

    def set_days_to_harv(self, dth):
        self.days_to_harvest = dth

    def set_growth_months(self, gm):
        self.growth_months = gm
    
    def set_precip_min(self, precip_min):
        self.precip_min = precip_min

    def set_precip_max(self, precip_max):
        self.precip_max = precip_max

    def set_temp_min(self, temp_min):
        self.temp_min = temp_min

    def set_temp_max(self, temp_max):
        self.temp_max = temp_max

    def set_ph_min(self, ph_min):
        self.ph_min = ph_min
    
    def set_ph_max(self, ph_max):
        self.ph_max = ph_max
    
    def set_light(self, light):
        self.light = light
