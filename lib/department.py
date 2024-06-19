class Department:
    DEPT_NAMES = ['mathematics',
                   'languages',
                   'sciences',
                   'humanities']
    SUBJECTS = ['mathematics',
                'english',
                'kiswahili',
                'physics',
                'chemistry',
                'biology',
                'history',
                'geography']
    all = []
    def __init__(self, name, subjects):
        self.name = name
        self.subjects = subjects
        
    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value):
        if not isinstance(value, str):
            raise ValueError('name must a string.')
        if not len(value) > 0:
            raise ValueError('name must have a value.')
        if not isinstance(value, Department.DEPT_NAMES):
            raise ValueError('name must be an instance of department names.')
        self._name = value

    @property
    def subjects(self):
        return self.subjects 

    @subjects.setter
    def subjects(self, value):
        if not isinstance(value, str):
            raise ValueError('name must a string.')
        if not len(value) > 0:
            raise ValueError('name must have a value.')
        if not isinstance(value, Department.SUBJECTS):
            raise ValueError('name must be an instance of subject names.')
        self._name = value


