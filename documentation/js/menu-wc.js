'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">latihan-nestjs documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-d3f8532ae28e7991f67333372aeab1dd736e8749a6f75c30011a89f3ba696d3ffa3f02ff6085646f48be0c8c5fdc378ff7cf825c0137104832587569b000bb4d"' : 'data-target="#xs-controllers-links-module-AppModule-d3f8532ae28e7991f67333372aeab1dd736e8749a6f75c30011a89f3ba696d3ffa3f02ff6085646f48be0c8c5fdc378ff7cf825c0137104832587569b000bb4d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-d3f8532ae28e7991f67333372aeab1dd736e8749a6f75c30011a89f3ba696d3ffa3f02ff6085646f48be0c8c5fdc378ff7cf825c0137104832587569b000bb4d"' :
                                            'id="xs-controllers-links-module-AppModule-d3f8532ae28e7991f67333372aeab1dd736e8749a6f75c30011a89f3ba696d3ffa3f02ff6085646f48be0c8c5fdc378ff7cf825c0137104832587569b000bb4d"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-d3f8532ae28e7991f67333372aeab1dd736e8749a6f75c30011a89f3ba696d3ffa3f02ff6085646f48be0c8c5fdc378ff7cf825c0137104832587569b000bb4d"' : 'data-target="#xs-injectables-links-module-AppModule-d3f8532ae28e7991f67333372aeab1dd736e8749a6f75c30011a89f3ba696d3ffa3f02ff6085646f48be0c8c5fdc378ff7cf825c0137104832587569b000bb4d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d3f8532ae28e7991f67333372aeab1dd736e8749a6f75c30011a89f3ba696d3ffa3f02ff6085646f48be0c8c5fdc378ff7cf825c0137104832587569b000bb4d"' :
                                        'id="xs-injectables-links-module-AppModule-d3f8532ae28e7991f67333372aeab1dd736e8749a6f75c30011a89f3ba696d3ffa3f02ff6085646f48be0c8c5fdc378ff7cf825c0137104832587569b000bb4d"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-a2af43d319144deeb4bc5fb3d7fdedd1181afc47177b263f90d21c51122c9c8ed47bcdf5bc9f2b391edbe1184e50363380d1a2f73cac9de0d8aad84483dc6a6c"' : 'data-target="#xs-controllers-links-module-AuthModule-a2af43d319144deeb4bc5fb3d7fdedd1181afc47177b263f90d21c51122c9c8ed47bcdf5bc9f2b391edbe1184e50363380d1a2f73cac9de0d8aad84483dc6a6c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-a2af43d319144deeb4bc5fb3d7fdedd1181afc47177b263f90d21c51122c9c8ed47bcdf5bc9f2b391edbe1184e50363380d1a2f73cac9de0d8aad84483dc6a6c"' :
                                            'id="xs-controllers-links-module-AuthModule-a2af43d319144deeb4bc5fb3d7fdedd1181afc47177b263f90d21c51122c9c8ed47bcdf5bc9f2b391edbe1184e50363380d1a2f73cac9de0d8aad84483dc6a6c"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-a2af43d319144deeb4bc5fb3d7fdedd1181afc47177b263f90d21c51122c9c8ed47bcdf5bc9f2b391edbe1184e50363380d1a2f73cac9de0d8aad84483dc6a6c"' : 'data-target="#xs-injectables-links-module-AuthModule-a2af43d319144deeb4bc5fb3d7fdedd1181afc47177b263f90d21c51122c9c8ed47bcdf5bc9f2b391edbe1184e50363380d1a2f73cac9de0d8aad84483dc6a6c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-a2af43d319144deeb4bc5fb3d7fdedd1181afc47177b263f90d21c51122c9c8ed47bcdf5bc9f2b391edbe1184e50363380d1a2f73cac9de0d8aad84483dc6a6c"' :
                                        'id="xs-injectables-links-module-AuthModule-a2af43d319144deeb4bc5fb3d7fdedd1181afc47177b263f90d21c51122c9c8ed47bcdf5bc9f2b391edbe1184e50363380d1a2f73cac9de0d8aad84483dc6a6c"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HelpersModule.html" data-type="entity-link" >HelpersModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HelpersModule-a81240a11d353e4ab4a974180e091c7da432c6244c605f99be9cd2fed7772c27712f23aa34f36494ed3930f67758774d1a76158f3c53d7d6373c0eeec1f301b5"' : 'data-target="#xs-injectables-links-module-HelpersModule-a81240a11d353e4ab4a974180e091c7da432c6244c605f99be9cd2fed7772c27712f23aa34f36494ed3930f67758774d1a76158f3c53d7d6373c0eeec1f301b5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HelpersModule-a81240a11d353e4ab4a974180e091c7da432c6244c605f99be9cd2fed7772c27712f23aa34f36494ed3930f67758774d1a76158f3c53d7d6373c0eeec1f301b5"' :
                                        'id="xs-injectables-links-module-HelpersModule-a81240a11d353e4ab4a974180e091c7da432c6244c605f99be9cd2fed7772c27712f23aa34f36494ed3930f67758774d1a76158f3c53d7d6373c0eeec1f301b5"' }>
                                        <li class="link">
                                            <a href="injectables/HelpersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HelpersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' : 'data-target="#xs-injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' :
                                        'id="xs-injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SchoolModule.html" data-type="entity-link" >SchoolModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SchoolModule-cece3acca683d2863e6eac7b4d75778807d00f3865e1ee163fb1e55c3a4f2628dce542e42f8caadd40dfad1905e1db097afa4acf0c8c76c10e117fd5136a6ae6"' : 'data-target="#xs-controllers-links-module-SchoolModule-cece3acca683d2863e6eac7b4d75778807d00f3865e1ee163fb1e55c3a4f2628dce542e42f8caadd40dfad1905e1db097afa4acf0c8c76c10e117fd5136a6ae6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SchoolModule-cece3acca683d2863e6eac7b4d75778807d00f3865e1ee163fb1e55c3a4f2628dce542e42f8caadd40dfad1905e1db097afa4acf0c8c76c10e117fd5136a6ae6"' :
                                            'id="xs-controllers-links-module-SchoolModule-cece3acca683d2863e6eac7b4d75778807d00f3865e1ee163fb1e55c3a4f2628dce542e42f8caadd40dfad1905e1db097afa4acf0c8c76c10e117fd5136a6ae6"' }>
                                            <li class="link">
                                                <a href="controllers/SchoolController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SchoolModule-cece3acca683d2863e6eac7b4d75778807d00f3865e1ee163fb1e55c3a4f2628dce542e42f8caadd40dfad1905e1db097afa4acf0c8c76c10e117fd5136a6ae6"' : 'data-target="#xs-injectables-links-module-SchoolModule-cece3acca683d2863e6eac7b4d75778807d00f3865e1ee163fb1e55c3a4f2628dce542e42f8caadd40dfad1905e1db097afa4acf0c8c76c10e117fd5136a6ae6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SchoolModule-cece3acca683d2863e6eac7b4d75778807d00f3865e1ee163fb1e55c3a4f2628dce542e42f8caadd40dfad1905e1db097afa4acf0c8c76c10e117fd5136a6ae6"' :
                                        'id="xs-injectables-links-module-SchoolModule-cece3acca683d2863e6eac7b4d75778807d00f3865e1ee163fb1e55c3a4f2628dce542e42f8caadd40dfad1905e1db097afa4acf0c8c76c10e117fd5136a6ae6"' }>
                                        <li class="link">
                                            <a href="injectables/SchoolService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskModule.html" data-type="entity-link" >TaskModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TaskModule-6a1a6a6421240648582cabc5ce90a635aebb25e4e510b3a66cf42a6202b560a880102058dc3f8bfcdc287854b7758418ff0d8c2bbe9b1f640df5befe023b07f4"' : 'data-target="#xs-controllers-links-module-TaskModule-6a1a6a6421240648582cabc5ce90a635aebb25e4e510b3a66cf42a6202b560a880102058dc3f8bfcdc287854b7758418ff0d8c2bbe9b1f640df5befe023b07f4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TaskModule-6a1a6a6421240648582cabc5ce90a635aebb25e4e510b3a66cf42a6202b560a880102058dc3f8bfcdc287854b7758418ff0d8c2bbe9b1f640df5befe023b07f4"' :
                                            'id="xs-controllers-links-module-TaskModule-6a1a6a6421240648582cabc5ce90a635aebb25e4e510b3a66cf42a6202b560a880102058dc3f8bfcdc287854b7758418ff0d8c2bbe9b1f640df5befe023b07f4"' }>
                                            <li class="link">
                                                <a href="controllers/TaskController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TaskModule-6a1a6a6421240648582cabc5ce90a635aebb25e4e510b3a66cf42a6202b560a880102058dc3f8bfcdc287854b7758418ff0d8c2bbe9b1f640df5befe023b07f4"' : 'data-target="#xs-injectables-links-module-TaskModule-6a1a6a6421240648582cabc5ce90a635aebb25e4e510b3a66cf42a6202b560a880102058dc3f8bfcdc287854b7758418ff0d8c2bbe9b1f640df5befe023b07f4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TaskModule-6a1a6a6421240648582cabc5ce90a635aebb25e4e510b3a66cf42a6202b560a880102058dc3f8bfcdc287854b7758418ff0d8c2bbe9b1f640df5befe023b07f4"' :
                                        'id="xs-injectables-links-module-TaskModule-6a1a6a6421240648582cabc5ce90a635aebb25e4e510b3a66cf42a6202b560a880102058dc3f8bfcdc287854b7758418ff0d8c2bbe9b1f640df5befe023b07f4"' }>
                                        <li class="link">
                                            <a href="injectables/TaskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateSchoolDto.html" data-type="entity-link" >CreateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTaskDto.html" data-type="entity-link" >CreateTaskDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSchoolDto.html" data-type="entity-link" >UpdateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTaskDto.html" data-type="entity-link" >UpdateTaskDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});