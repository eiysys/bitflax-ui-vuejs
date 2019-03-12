<template>
    <div class="">
      <!-- <link rel="stylesheet" type="text/css" href="../static/css/style.css"> -->
      <app-header></app-header>

      <div class="right-inner-content">
        <div id="item" class="text-center">

        </div>
        {{allValue}}
      </div>
    </div>
</template>

<script>
    import Header from '../header/header.vue';

    export default {
        name: 'signUp',
        components: {
            'app-header': Header,
        },
        data() {
            return {
              user_AT : '',
              treeData: [],
              allValue: ''
            }
        },
        methods: {
          createMap: function (fab_data) {
            var treeData = [

              ];

              treeData.push(fab_data)
              // ************** Generate the tree diagram	 *****************
              var margin = {top: 40, right: 120, bottom: 0, left: 120},
              width = 960 - margin.right - margin.left,
              height = 800 - margin.top - margin.bottom;

              var i = 0;

              var tree = d3.layout.tree()
              .size([height, width]);

              var diagonal = d3.svg.diagonal()
              .projection(function(d) { return [d.x, d.y]; });

              var svg = d3.select("#item").append("svg")
              .attr("width", width + margin.right + margin.left)
              .attr("height", height + margin.top + margin.bottom)
              .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

              var root = treeData[0];

              update(root);

              function update(source) {

                // Compute the new tree layout.
                var nodes = tree.nodes(root).reverse(),
                  links = tree.links(nodes);

                // Normalize for fixed-depth.
                nodes.forEach(function(d) { d.y = d.depth * 75; });

                // Declare the nodes…
                var node = svg.selectAll("g.node")
                  .data(nodes, function(d) { return d.id || (d.id = ++i); });

                // Enter the nodes.
                var nodeEnter = node.enter().append("g")
                  .attr("class", "node")
                  .attr("transform", function(d) {
                    return "translate(" + d.x + "," + d.y + ")"; });

                nodeEnter.append("circle")
                  .attr("r", 10)
                  .style("fill", "#fff");

                nodeEnter.append("text")
                  .attr("y", function(d) {
                    return d.children || d._children ? -18 : 18; })
                  .attr("dy", ".35em")
                  .attr("text-anchor", "middle")
                  .text(function(d) { return d.username; })
                  .style("fill-opacity", 1);

                // Declare the links…
                var link = svg.selectAll("path.link")
                  .data(links, function(d) { return d.target.id; });

                // Enter the links.
                link.enter().insert("path", "g")
                  .attr("class", "link")
                  .attr("d", diagonal);

              }
          }
        },
        created() {

        },
        mounted() {
          var userData = localStorage.getItem('bitflax:userData');
          var decrypted = CryptoJS.AES.decrypt(userData, this.MySECRET);
          userData = decrypted.toString(CryptoJS.enc.Utf8)
          this.user_AT = JSON.parse(userData).access_token;
          this.urlWithUserName = this.urlWithUserName + this.user_name

          var Authorization = 'Bearer ' + this.user_AT
          var url = this.apiURL + '/Referral/getreferraltree'
          this.$http.get(url ,{headers: {'Authorization': Authorization}}).then(response => {
            console.log(response);
            var allValue = response.body
            var fakeData = {
                "contentType": null,
                "serializerSettings": null,
                "statusCode": null,
                "value": {
                    "id": "namneet-20180106181249722",
                    "text": "nmt-singh",
                    "level": 0,
                    "children": [
                        {
                            "accountNo": "namneet-20180108140910645",
                            "username": "nmntsingh",
                            "level": 1,
                            "parent": "namt-singh",
                            "children": [
                                {
                                    "accountNo": "nmnt-20180106153042357",
                                    "username": "test-bitflax",
                                    "level": 2,
                                    "parent": "nmntsingh",
                                    "children": [
                                        {
                                            "accountNo": "namneet-20180108141206141",
                                            "username": "namneetsingh",
                                            "level": 3,
                                            "parent": "test-bitflax",
                                            "children": [
                                                {
                                                    "accountNo": "namneet-20180106110728845",
                                                    "username": "yogesh",
                                                    "level": 4,
                                                    "parent": "namneetsingh",
                                                    "children": []
                                                },
                                                {
                                                    "accountNo": "namneet-20180108140910645",
                                                    "username": "singh",
                                                    "level": 1,
                                                    "parent": "namt-singh"
                                                },
                                                {
                                                    "accountNo": "namneet-20180108140910645",
                                                    "username": "sharma",
                                                    "level": 1,
                                                    "parent": "namt-singh"
                                                },
                                                {
                                                    "accountNo": "namneet-20180108140910645",
                                                    "username": "yo",
                                                    "level": 1,
                                                    "parent": "namt-singh"
                                                },
                                                {
                                                    "accountNo": "namneet-20180108140910645",
                                                    "username": "my",
                                                    "level": 1,
                                                    "parent": "namt-singh"
                                                },
                                                {
                                                    "accountNo": "namneet-20180108140910645",
                                                    "username": "nmntsingh",
                                                    "level": 1,
                                                    "parent": "namt-singh"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "accountNo": "nmnt-20180106153042357",
                                    "username": "test-bitflax",
                                    "level": 2,
                                    "parent": "nmntsingh",
                                    "children": [
                                        {
                                            "accountNo": "namneet-20180108141206141",
                                            "username": "namneetsingh",
                                            "level": 3,
                                            "parent": "test-bitflax",
                                            "children": [
                                                {
                                                    "accountNo": "namneet-20180106110728845",
                                                    "username": "rahul",
                                                    "level": 4,
                                                    "parent": "namneetsingh",
                                                    "children": [
                                                        {
                                                            "accountNo": "namneet-20180108141206141",
                                                            "username": "namneetsingh",
                                                            "level": 3,
                                                            "parent": "test-bitflax"
                                                        },
                                                        {
                                                            "accountNo": "namneet-20180106110728845",
                                                            "username": "yogesh",
                                                            "level": 4,
                                                            "parent": "namneetsingh",
                                                            "children": [
                                                                {
                                                                    "accountNo": "namneet-20180108141206141",
                                                                    "username": "namneetsingh",
                                                                    "level": 3,
                                                                    "parent": "test-bitflax"
                                                                },
                                                                {
                                                                    "accountNo": "namneet-20180106110728845",
                                                                    "username": "yogesh",
                                                                    "level": 4,
                                                                    "parent": "namneetsingh",
                                                                    "children": []
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "accountNo": "namneet-20180106110728845",
                                            "username": "yogesh",
                                            "level": 4,
                                            "parent": "namneetsingh",
                                            "children": []
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            "accountNo": "namneet-20180108140910645",
                            "username": "nmntsingh",
                            "level": 1,
                            "parent": "namt-singh"
                        },
                        {
                            "accountNo": "namneet-20180108140910645",
                            "username": "nmntsingh",
                            "level": 1,
                            "parent": "namt-singh"
                        },
                        {
                            "accountNo": "namneet-20180108140910645",
                            "username": "nmntsingh",
                            "level": 1,
                            "parent": "namt-singh"
                        },
                        {
                            "accountNo": "namneet-20180108140910645",
                            "username": "nmntsingh",
                            "level": 1,
                            "parent": "namt-singh"
                        },
                        {
                            "accountNo": "namneet-20180108140910645",
                            "username": "nmntsingh",
                            "level": 1,
                            "parent": "namt-singh"
                        },
                        {
                            "accountNo": "namneet-20180108140910645",
                            "username": "nmntsingh",
                            "level": 1,
                            "parent": "namt-singh"
                        }
                    ]
                }
            }

            var fakeData = response


            var fab_data = fakeData.body.value;
            // var fab_data = fakeData.value;


            // console.log(fab_data);
            fab_data.username = fab_data.text
            // console.log(fab_data);
            // this.treeData.push(fakeData.value)



            this.createMap(fab_data)
          }, response => {
            console.log(response);
          })



        }
    }
</script>
<style>
.node {
    cursor: pointer;
  }

.node circle {
    fill: #fff;
    stroke: steelblue;
    stroke-width: 1.5px;
  }

.node text {
    font: 10px sans-serif;
  }

.link {
    fill: none;
    stroke: #f27722;
    stroke-width: 1.5px;
  }
</style>
