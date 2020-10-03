const fs = require('fs');
const _ = require('lodash')
const db = require('diskdb');
const Action = require('../../proxy/actions').Action;
const toClass = require('./helper').toClass;

if (!fs.existsSync('./.data')) fs.mkdirSync('./.data')
if (!fs.existsSync('./.data/db')) fs.mkdirSync('./.data/db')

db.connect('./.data/db', ['pushes']);

const getPushes = (query={ error: false, blocked: true, allowPush: false, }) => {
  const data = db.pushes.find(query);
  console.log(data);
  return _.chain(data)
    .map((x) => toClass(x, Action.prototype))
    .value();  
}

const getPush = (id) => {
  console.log(`data.file:getPush(${id})`);
  const data = db.pushes.findOne({id: id});  
  const action = toClass(data, Action.prototype);
  return action;    
}

const writeAudit = (action) => {
  console.log(`data.file:writeAudit(${action})`);
  var options = { multi: false, upsert: true };  
  db.pushes.update({id: action.id}, action, options);
}

const authorise = (id) => {
  console.log(`data::authorizing ${id}`)
  const action = getPush(id);
  action.authorised = true;
  writeAudit(action);
  return { message: `authorised ${id}`};
}

module.exports.getPushes = getPushes;
module.exports.writeAudit = writeAudit;
module.exports.getPush = getPush;
module.exports.authorise = authorise;
