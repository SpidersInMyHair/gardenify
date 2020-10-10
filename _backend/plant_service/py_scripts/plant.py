'''
    Plant class to store the information relating to a plant's general information plus its growth information
    
    name:               The usual common name, in english, of the species (if any).
    species:            The scientific name of the species family
    genus:              The scientific name of the species genus
    vegetable:          Is the species a vegetable?
    observations:       Some habit observations on the species
    image_url:          A main image url of the species
    growth:             The Growth class instance that belongs to this plant

'''
class Plant:
    def __init__(self, name, vegetable, observations, image_url, growth=None):
        self.name = name
        self.vegetable = vegetable
        self.observations = observations
        self.image_url = image_url
        self.growth = growth
    
    def set_growth(self, growth_inst):
        self.growth = growth_inst