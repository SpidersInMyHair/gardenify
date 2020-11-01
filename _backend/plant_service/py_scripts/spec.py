'''
    Stores the information relating to a species's main characteristics.

    growth_habit:   The plant's appearance, growth form, or architecture
    growth_rate:    The relative growth speed of the plant
    avg_height:     The average height of the species, in centimeters
    shape:          The predominant shape of the species
    toxic:          Relative toxicity of the species for humans or animals
                    Can be: none, low, medium, and high.
'''


class Spec:
    def __init__(self, growth_habit='NOT_SET', growth_rate='NOT_SET',
                 avg_height='NOT_SET', shape='NOT_SET', toxic='NOT_SET'):
        self.growth_habit = growth_habit
        self.growth_rate = growth_rate
        self.avg_height = avg_height
        self.shape = shape
        self.toxic = toxic

    def set_growth_habit(self, growth_habit_inst):
        self.growth_habit = growth_habit_inst

    def set_growth_rate(self, growth_rate_inst):
        self.growth_rate = growth_rate_inst

    def set_avg_height(self, avg_height_inst):
        self.avg_height = avg_height_inst

    def set_shape(self, shape_inst):
        self.shape = shape_inst

    def set_toxic(self, toxic_inst):
        self.toxic = toxic_inst


def set_spec_att(spec, key, value):
    if key == 'growth_habit':
        spec.set_growth_habit(value)
    elif key == 'growth_rate':
        spec.set_growth_rate(value)
    elif key == 'average_height':
        spec.set_avg_height(value['cm'])
    elif key == 'shape_and_orientation':
        spec.set_shape(value)
    elif key == 'toxicity':
        spec.set_toxic(value)

    return spec
