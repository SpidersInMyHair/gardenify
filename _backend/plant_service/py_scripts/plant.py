'''
    Plant class to store the information relating to a plant's general
    information plus its growth information.

    name:               The usual common name, in english, of the species
                        (if any).
    species:            The scientific name of the species family
    genus:              The scientific name of the species genus
    vegetable:          Is the species a vegetable?
    observations:       Some habit observations on the species
    image_url:          A main image url of the species
    growth:             The Growth class instance that belongs to this plant
    spec:               Species's main characteristics

'''


class Plant:
    def __init__(self, name='NOT_SET', species='NOT_SET',
                 genus='NOT_SET', vegetable='NOT_SET',
                 observations='NOT_SET', image_url='NOT_SET',
                 edible='NOT_SET', growth=None, spec=None):

        self.name = name
        self.species = species
        self.genus = genus
        self.vegetable = vegetable
        self.observations = observations
        self.image_url = image_url
        self.growth = growth
        self.edible = edible
        self.spec = spec

    def set_name(self, name_inst):
        self.name = name_inst

    def set_species(self, species_inst):
        self.species = species_inst

    def set_genus(self, genus_inst):
        self.genus = genus_inst

    def set_if_veg(self, vegetable_inst):
        self.vegetable = vegetable_inst

    def set_obs(self, observations_inst):
        self.observations = observations_inst

    def set_image_url(self, image_url_inst):
        self.image_url = image_url_inst

    def set_edible(self, edible_inst):
        self.edible = edible_inst

    def set_growth(self, growth_inst):
        self.growth = growth_inst

    def set_spec(self, spec_inst):
        self.spec = spec_inst


def set_plant_att(plant, key, value):
    if key == 'common_name':
        plant.set_name(value)
    elif key == 'scientific_name':
        plant.set_species(value)
    elif key == 'genus':
        plant.set_genus(value)
    elif key == 'vegetable':
        plant.set_if_veg(value)
    elif key == 'observations':
        plant.set_obs(value)
    elif key == 'image_url':
        plant.set_image_url(value)
    elif key == 'edible':
        plant.set_edible(value)

    return plant
