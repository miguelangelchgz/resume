'use strict';

/*
This is empty on purpose! Your code to build the resume will go here.
 */
$(function () {
    var model = {
        bio: {
            name: 'Miguel Angel Chacon',
            role: 'Front-End / Android Developer',
            contacts: {
                mobile: '584128712091',
                email: 'miguelangelchgz@gmail.com',
                github: 'miguelangelchgz',
                twitter: '@miguelangelch_',
                location: ''
            },
            welcomeMessage: 'Hello',
            skills: ['HTML', 'CSS/SASS', 'JavaScript/ES6', 'JQuery', 'Python', 'Java', 'Android SDK', 'Vue'],
            biopic: 'https://avatars2.githubusercontent.com/u/23442452?s=460&v=4',
            display: function display() {}
        },
        education: {
            schools: [{
                name: 'UNEFA',
                location: 'Maracay',
                degree: 'Ingeniería de Sistemas',
                majors: ['Ingeniero de Sistemas'],
                dates: '2012-2019',
                url: ''
            }],
            onlineCourses: [{
                title: 'Android Basics by Google',
                school: 'Udacity',
                dates: '2018',
                url: 'https://www.udacity.com/course/android-basics-nanodegree-by-google--nd803'
            }],
            display: function display() {}
        },
        work: {
            jobs: [{
                employer: 'Telearagua',
                title: 'Android Developer',
                location: 'Maracay',
                dates: 'June 2018',
                description: 'Practicas profesionales realizadas en la institución Telearagua, en la cual se desarrollo una app de noticias para Android.'
            }],
            display: function display() {}
        },
        projects: {
            projects: [{
                title: 'Portafolio',
                dates: '2018',
                description: 'Página portafolio responsiva desarrollada usado HTML, SASS(CSS), jQuery(JavaScript) siguiendo el patrón de arquitectura de software Modelo Vista Controlador',
                images: ['https://raw.githubusercontent.com/miguelangelchgz/resume/master/images/portafolio.png']
            }, {
                title: 'Telearagua App',
                dates: '2018',
                description: 'Aplicación de noticias desarrollada en Java para el sistema operativo Android.',
                images: ['https://raw.githubusercontent.com/miguelangelchgz/Telearagua/master/all.png']
            }],
            display: function display() {}
        }
    };

    var octopus = {
        init: function init() {
            headerView.init();
            workView.init();
            projectView.init();
            educationView.init();
        },
        getBio: function getBio() {
            return model.bio;
        },
        getContacts: function getContacts() {
            return model.bio.contacts;
        },
        getSkills: function getSkills() {
            return model.bio.skills;
        },
        getJobs: function getJobs() {
            return model.work.jobs;
        },
        getProjects: function getProjects() {
            return model.projects.projects;
        },
        getSchools: function getSchools() {
            return model.education.schools;
        },
        getCourses: function getCourses() {
            return model.education.onlineCourses;
        }
    };

    var headerView = {
        init: function init() {
            this.header = $('#header');
            this.headerContacts = $('#topContacts');
            this.render();
        },
        render: function render() {
            this.header.prepend(HTMLheaderRole.replace('%data%', octopus.getBio().role));
            this.header.prepend(HTMLheaderName.replace('%data%', octopus.getBio().name));

            this.headerContacts.append(HTMLmobile.replace('%data%', octopus.getContacts().mobile));
            this.headerContacts.append(HTMLemail.replace('%data%', octopus.getContacts().email));
            this.headerContacts.append(HTMLtwitter.replace('%data%', octopus.getContacts().twitter));
            this.headerContacts.append(HTMLgithub.replace('%data%', octopus.getContacts().github));
            this.headerContacts.append(HTMLlocation.replace('%data%', octopus.getContacts().location));

            this.header.append(HTMLbioPic.replace('%data%', octopus.getBio().biopic));
            this.header.append(HTMLwelcomeMsg.replace('%data%', octopus.getBio().welcomeMessage));
            this.header.append(HTMLskillsStart);
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = octopus.getSkills()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var skill = _step.value;

                    $('#skills').append(HTMLskills.replace('%data%', skill));
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    };

    var workView = {
        init: function init() {
            this.workExp = $('#workExperience');
            this.render();
        },
        render: function render() {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = octopus.getJobs()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var job = _step2.value;

                    var entry = $(HTMLworkStart);
                    entry.append(HTMLworkEmployer.replace('%data%', job.employer + HTMLworkTitle.replace('%data%', job.title)));
                    entry.append(HTMLworkDates.replace('%data%', job.dates));
                    entry.append(HTMLworkLocation.replace('%data%', job.location));
                    entry.append(HTMLworkDescription.replace('%data%', job.description));
                    this.workExp.append(entry);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    };

    var projectView = {
        init: function init() {
            this.projects = $('#projects');
            this.render();
        },
        render: function render() {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = octopus.getProjects()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var project = _step3.value;

                    var entry = $(HTMLprojectStart);
                    entry.append(HTMLprojectTitle.replace('%data%', project.title));
                    entry.append(HTMLprojectDates.replace('%data%', project.dates));
                    entry.append(HTMLprojectDescription.replace('%data%', project.description));
                    var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = undefined;

                    try {
                        for (var _iterator4 = project.images[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                            var image = _step4.value;

                            entry.append(HTMLprojectImage.replace('%data%', image));
                        }
                    } catch (err) {
                        _didIteratorError4 = true;
                        _iteratorError4 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                _iterator4.return();
                            }
                        } finally {
                            if (_didIteratorError4) {
                                throw _iteratorError4;
                            }
                        }
                    }

                    this.projects.append(entry);
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    };

    var educationView = {
        init: function init() {
            this.education = $('#education');
            this.render();
        },
        render: function render() {
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = octopus.getSchools()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var school = _step5.value;

                    var entry = $(HTMLschoolStart);
                    entry.append(HTMLschoolName.replace('%data%', school.name + HTMLschoolDegree.replace('%data%', school.degree)));
                    entry.append(HTMLschoolDates.replace('%data%', school.dates));
                    entry.append(HTMLschoolLocation.replace('%data%', school.location));
                    var majorsData = '';
                    var _iteratorNormalCompletion7 = true;
                    var _didIteratorError7 = false;
                    var _iteratorError7 = undefined;

                    try {
                        for (var _iterator7 = school.majors[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                            var major = _step7.value;

                            majorsData += major + ', ';
                        }
                    } catch (err) {
                        _didIteratorError7 = true;
                        _iteratorError7 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion7 && _iterator7.return) {
                                _iterator7.return();
                            }
                        } finally {
                            if (_didIteratorError7) {
                                throw _iteratorError7;
                            }
                        }
                    }

                    entry.append(HTMLschoolMajor.replace('%data%', majorsData));

                    this.education.append(entry);
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            this.education.append(HTMLonlineClasses);
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = octopus.getCourses()[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var course = _step6.value;

                    this.education.append(HTMLonlineTitle.replace('%data%', course.title) + HTMLonlineSchool.replace('%data%', course.school));
                    this.education.append(HTMLonlineDates.replace('%data%', course.dates));
                    if (course.url != '') {
                        this.education.append(HTMLonlineURL.replace('%data%', course.url));
                    }
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }
        }
    };

    octopus.init();
});
//# sourceMappingURL=resumeBuilder.js.map
