/**
 * Sequelize initialization module
 */

'use strict';

import path from 'path';
import config from '../config/environment';
import Sequelize from 'sequelize';

var db = {
  Sequelize,
  sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
};

// Insert models below
db.PatientProcessingTemp = db.sequelize.import('../api/patient-processing-temp/patient-processing-temp.model');
db.PatientProcessing = db.sequelize.import('../api/patient-processing/patient-processing.model');
db.CallTicket = db.sequelize.import('../api/call-ticket/call-ticket.model');
db.Thing = db.sequelize.import('../api/thing/thing.model');
db.User = db.sequelize.import('../api/user/user.model');

export default db;
