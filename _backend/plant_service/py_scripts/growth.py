'''
    Growth class to store the information relating to a plant's optimal growth.

    description:      A description on how the plant usually grows
    days_to_harvest:  The average numbers of days required before harvesting
    growth_month:     The most active growth months of the species
                      (usually all year round for perennial plants)
    min_precip:       Minimum rain (precipitation) per year, in mm/year
    max_precip:       Maximum rain (precipitation) per year, in mm/year
    min_temp:         Minimum tolerable temperature for the species (in °C)
    max_temp:         Maximum tolerable temperature for the species (in °C)
    min_ph:           The minimum acceptable soil pH (of the top 30cm of soil)
    max_ph:           The maximum acceptable soil pH (of the top 30cm of soil)
    light:            Required amount of light, on a scale from 0 (no light,
                      <= 10 lux) to 10 (intensive insolation, >= 100000 lux)
    average_height:   The average height of the species (cm)
    toxic:            Relative toxicity of the species for humans or animals,
                      can be: none, low, medium, or high
'''


class Growth:
    def __init__(self, description='NOT_SET', days_to_harvest='NOT_SET',
                 growth_months='NOT_SET', precip_min='NOT_SET',
                 precip_max='NOT_SET', temp_min='NOT_SET',
                 temp_max='NOT_SET', ph_min='NOT_SET', ph_max='NOT_SET',
                 light='NOT_SET'):
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


def set_growth_att(growth, key, value):
    if key == 'description':
        growth.set_desc(value)
    elif key == 'days_to_harvest':
        growth.set_days_to_harv(value)
    elif key == 'growth_months':
        growth.set_growth_months(value)
    elif key == 'minimum_precipitation':
        growth.set_precip_min(value['mm'])
    elif key == 'maximum_precipitation':
        growth.set_precip_max(value['mm'])
    elif key == 'minimum_temperature':
        growth.set_temp_min(value['deg_c'])
    elif key == 'maximum_temperature':
        growth.set_temp_max(value['deg_c'])
    elif key == 'ph_maximum':
        growth.set_ph_min(value)
    elif key == 'ph_minimum':
        growth.set_ph_max(value)
    elif key == 'light':
        growth.set_light(value)
    return growth
