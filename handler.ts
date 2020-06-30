import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";
import { connect } from "mongoose";
import Vaga from "./src/schema/vaga";
const MONGO_URL =
  "";

export const createVaga: APIGatewayProxyHandler = async (event, _context) => {
  try {
    await connect(MONGO_URL, { useNewUrlParser: true });
    const vaga = await Vaga.create(JSON.parse(event.body));
    return {
      statusCode: 200,
      body: JSON.stringify(vaga),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};

export const findVaga: APIGatewayProxyHandler = async (event, _context) => {
  try {
    await connect(MONGO_URL, { useNewUrlParser: true });
    const vaga = await Vaga.find();
    return {
      statusCode: 200,
      body: JSON.stringify(vaga),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};

export const deleteVaga: APIGatewayProxyHandler = async (event, _context) => {
  const { id } = event.pathParameters;
  try {
    await connect(MONGO_URL, { useNewUrlParser: true });
    await Vaga.findByIdAndRemove(id);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "success" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};

export const updateVaga: APIGatewayProxyHandler = async (event, _context) => {
  const { id } = event.pathParameters;
  try {
    await connect(MONGO_URL, { useNewUrlParser: true });
    const vaga = await Vaga.findByIdAndUpdate(id, JSON.parse(event.body), {
      new: true,
    });
    return {
      statusCode: 200,
      body: JSON.stringify(vaga),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};



