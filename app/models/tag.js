import DS from 'ember-data';

export default DS.Model.extend({
  node: DS.hasMany('node')
});
