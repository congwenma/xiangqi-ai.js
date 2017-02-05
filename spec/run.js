import Jasmine from 'jasmine'
import _ from 'lodash'

var jasmine = new Jasmine
jasmine.loadConfigFile('spec/support/jasmine.json')
jasmine.execute()
