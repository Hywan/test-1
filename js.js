/**
 * NOTICE OF LICENSE
 *
 * This source file is licensed exclusively to Inovia Team.
 *
 * @copyright   Copyright (c) 2016 Inovia Team (http://www.inovia.fr)
 * @license     All rights reserved
 * @author      The Inovia Dev Team
 */

/*
 * SonarQube, open source software quality management tool.
 * Copyright (C) 2008-2013 SonarSource
 * mailto:contact AT sonarsource DOT com
 *
 * SonarQube is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * SonarQube is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */

/*
 * NOTICE OF LICENSE
 *
 * This source file is licensed exclusively to Inovia Team.
 *
 *
 * @copyright   Copyright (c) 2016 Inovia Team (http://www.inovia.fr)
 * @license     All rights reserved
 * @author      The Inovia Dev Team
 */
(function () {
    'use strict';

    angular.module('MobileApps')
        .run(['LegacyProjectService', 'NavBarNavigationService', function (LegacyProjectService, NavBarNavigationService) {
            LegacyProjectService.mobileApps = {
                setMenuUrl: function (url) {
                    NavBarNavigationService.setMenuUrl(url);
                }
            };
        }]);
})();
