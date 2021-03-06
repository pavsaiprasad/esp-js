// notice_start
/*
 * Copyright 2015 Dev Shop Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// notice_end

import esp from '../../src';

describe('Router', () => {

    var _router;

    beforeEach(() => {
        _router = new esp.Router();
        _router.addModel('modelId1', {});
        _router.getEventObservable('modelId1', 'startEvent').subscribe(() => {
        });
        _router.getModelObservable('modelId1').subscribe(m => {
        });
    });

    describe('diagnostics', () => {

        it('when enableDiagnostics called getDispatchLoopDiagnostics returns diagnostics', ()=> {
            _router.enableDiagnostics();
            _router.publishEvent('modelId1', 'startEvent', {});
            var dispatchLoopDiagnostics = _router.getDispatchLoopDiagnostics();
            expect(dispatchLoopDiagnostics).toBeDefined();
        });

        it('when enableDiagnostics called getDispatchLoopDiagnostics returns diagnostics', ()=> {
            _router.enableDiagnostics();
            _router.publishEvent('modelId1', 'startEvent', {});
            _router.disableDiagnostics();
            _router.publishEvent('modelId1', 'startEvent', {});
            expect(_router.getDispatchLoopDiagnostics()).toEqual('Call router.enableDiagnostics() to enable diagnostics. If in a browser use esp-js-devtools.');
        });
    });
});