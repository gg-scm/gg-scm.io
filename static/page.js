// Copyright 2018 The gg Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

function outbound(query, label) {
  var q = document.querySelectorAll(query);
  for (var i = 0; i < q.length; i++) {
    q[i].addEventListener('click', function() {
      gtag('event', 'click', {
        event_category: 'Outbound Link',
        event_label: label,
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  outbound('.downloadlink', 'Download');
  outbound('.githublink', 'GitHub');
  outbound('.editpagelink', 'Edit Page');

  var q = document.querySelectorAll('.link_button');
  for (var i = 0; i < q.length; i++) {
    q[i].addEventListener('click', function(e) {
      window.location.href = e.target.dataset.href;
    });
  }
});
