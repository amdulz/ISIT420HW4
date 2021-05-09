﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace NodeOrders500.Controllers
{
    public class EmployeeSalesController : ApiController
    {
        NodeOrders500Entities myNodeOrdersDB = new NodeOrders500Entities();
        public IHttpActionResult GetEmployeeSales(string employeeName)
        {
            var result =
                (from order in myNodeOrdersDB.Orders
                 where (order.SalesPersonTable.FirstName + " " + order.SalesPersonTable.LastName) == employeeName
                 select order.pricePaid).Sum();

            return Ok(result);
        }
    }
}
