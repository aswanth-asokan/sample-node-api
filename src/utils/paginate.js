const { Op } = require('sequelize');

const getOffset = (page, limit) => {
  return page * limit - limit;
};

const pagination = async function (model, pageSize, pageLimit, search = {}, order = []) {
  try {
    const limit = parseInt(pageLimit, 10) || 10;
    const page = parseInt(pageSize, 10) || 1;
    let options = {
      offset: getOffset(page, limit),
      limit,
    };
    if (Object.keys(search).length) {
      options = { options, ...search };
    }
    if (order && order.length) {
      options.order = order;
    }
    const { count, rows } = await model.findAndCountAll(options);
    return {
      page,
      totalResults: count,
      results: rows,
    };
  } catch (error) {
    return error;
  }
};

const paginate = async (model, query) => {
  const { page, size, sortBy, ...searchParams } = query;
  let search = {};
  const order = [];
  if (searchParams) {
    const keys = Object.keys(searchParams);
    keys.forEach((key) => {
      search = {
        where: {
          [`${key}`]: {
            [Op.like]: `%${searchParams[key]}%`,
          },
        },
      };
    });
  }
  if (sortBy) {
    order.push([sortBy]);
  }
  return pagination(model, page, size, search, order);
};

module.exports = paginate;
