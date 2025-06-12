"use client";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Box sx={{ maxWidth: "1500px", margin: "auto", marginBottom : "70px"}}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Box
          component="img"
          src="/pizzashop.png"
          alt="Pizza Shop"
          sx={{
            width: "200px",
            height: "auto",
            borderRadius: 2,
            objectFit: "cover",
          }}
        />
        <List
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 5,
            color: "#A3A3A3",
            "& .MuiTypography-root": {
              fontSize: "20px",
            },
            "& .MuiListItem-root": {
              borderBottom: ["1px solid #210A01"],
              cursor: "pointer",
              "&:hover": {
                color: "#FF6432",
                borderBottom: ["1px solid #FF6432"],
              },
            },
          }}
        >
          <ListItem disablePadding sx={{ width: "auto" }}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem disablePadding sx={{ width: "auto" }}>
            <ListItemText primary="Menu" />
          </ListItem>
          <ListItem disablePadding sx={{ width: "auto" }}>
            <ListItemText primary="Events" />
          </ListItem>
          <ListItem disablePadding sx={{ width: "auto" }}>
            <ListItemText primary="About us" />
          </ListItem>
        </List>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            sx={{
              background: "linear-gradient(to right, #FF6432, #FFA228)",
              color: "white",
              width: "130px",
              borderRadius: "20px",
              fontWeight: "bold",
            }}
          >
            Log in
          </Button>
          <Box
            sx={{ display: { xs: "none", md: "block" } }}
            component="img"
            src="/Group 4.png"
            alt="gou"
          />
        </Box>
      </Box>
      {/* //////////// first section */}
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: "space-between",
          paddingTop: "50px",
          alignItems: "center",
          width: { xs: "90%", md: "100%" },
          margin: "auto",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "80px" }}>
            The Fastest <br /> Pizza{" "}
            <Box component="img" src="/Lightning 2.png" alt="hello" /> Delivery
          </Typography>
          <Typography sx={{ color: "#A3A3A3", fontSize: "20px" }}>
            We will deliver juicy pizza for your family in 30 <br /> minutes, if
            the courier is late - pizza is free!
          </Typography>
          <br />
          <Typography sx={{ color: "#A3A3A3", fontSize: "20px" }}>
            Cooking process:
          </Typography>
          <Box component="img" src="/videoPizza.png" />
          <Box
            sx={{
              border: ["1px solid #FFA631"],
              width: "260px",
              display: "flex",
              borderRadius: "20px",
            }}
          >
            <Button
              sx={{
                background: "linear-gradient(to right, #FF6432, #FFA228)",
                color: "white",
                width: "130px",
                borderRadius: "20px",
                fontWeight: "bold",
              }}
            >
              To order
            </Button>
            <Button
              sx={{
                color: "white",
                width: "130px",
                borderRadius: "20px",
                fontWeight: "bold",
              }}
            >
              Pizza-Menu
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", md: "40%" },
            paddingTop: { xs: "70px", md: "5px" },
          }}
        >
          <Box
            component="img"
            src="/hero.png.png"
            alt="hero"
            sx={{ width: "100%" }}
          />
          <Box
            component="img"
            src="/fries 1.png"
            alt="hero"
            sx={{
              position: "absolute",
              bottom: "0px",
              left: "-150px",
              width: "300px",
            }}
          />
          <Box
            component="img"
            src="/pizza 1.png"
            alt="hero"
            sx={{ position: "absolute", top: "-80px", right: "-10px" }}
          />
        </Box>
      </Box>
      {/* //////////// second section */}
      <Box sx={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Typography
          sx={{ textAlign: "center", fontSize: "50px", fontWeight: "bold" }}
        >
          Menu
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "space-between" },
            paddingTop: "10px",
            paddingBottom: "30px",
            flexWrap: "wrap",
            gap: { xs: "20px", md: "1px" },
          }}
        >
          <Button
            sx={{
              background: "#210A01",
              boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
              color: "white",
              width: { xs: "25%", md: "18%" },
              padding: "10px",
              borderRadius: "20px",
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(to right, #FF6432, #FFA228)",
              },
            }}
          >
            Show All
          </Button>
          <Button
            sx={{
              background: "#210A01",
              boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
              color: "white",
              width: { xs: "25%", md: "18%" },
              padding: "10px",
              borderRadius: "20px",
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(to right, #FF6432, #FFA228)",
              },
            }}
          >
            Meat
          </Button>
          <Button
            sx={{
              background: "#210A01",
              boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
              color: "white",
              width: { xs: "25%", md: "18%" },
              padding: "10px",
              borderRadius: "20px",
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(to right, #FF6432, #FFA228)",
              },
            }}
          >
            Vegetarian
          </Button>
          <Button
            sx={{
              background: "#210A01",
              boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
              color: "white",
              width: { xs: "25%", md: "18%" },
              padding: "10px",
              borderRadius: "20px",
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(to right, #FF6432, #FFA228)",
              },
            }}
          >
            Sea products
          </Button>
          <Button
            sx={{
              background: "#210A01",
              boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
              color: "white",
              width: { xs: "25%", md: "18%" },
              padding: "10px",
              borderRadius: "20px",
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(to right, #FF6432, #FFA228)",
              },
            }}
          >
            Mushroom
          </Button>
        </Box>
        {/* /////////// pizza box */}
        <Box
          sx={{
            paddingTop: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "space-between" },
            gap: { xs: "100px", md: "1px" },
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#210A01",
              paddingTop: "10px",
              width: { xs: "90%", md: "23%" },
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              paddingTop: "100px",
              paddingBottom: "10px",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src="/pizza 2.png"
              alt="pizza"
              sx={{ position: "absolute", top: "-100px" }}
            />
            <Typography sx={{ fontSize: "30px" }}>Italian</Typography>
            <Typography sx={{ fontSize: "15px", color: "#A3A3A3" }}>
              Filling: onion, potato, tomato, <br /> mushrooms, cheese, olives,
              meat...
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Button
                sx={{
                  background: "#210A01",
                  boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                  border: ["1px solid"],
                  color: "white",
                  padding: "10px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(to right, #FF6432, #FFA228)",
                  },
                }}
              >
                20
              </Button>
              <Button
                sx={{
                  background: "#210A01",
                  boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                  border: ["1px solid"],
                  color: "white",
                  padding: "10px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(to right, #FF6432, #FFA228)",
                  },
                }}
              >
                28
              </Button>
              <Button
                sx={{
                  background: "#210A01",
                  boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                  border: ["1px solid"],
                  color: "white",
                  padding: "10px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(to right, #FF6432, #FFA228)",
                  },
                }}
              >
                33
              </Button>
            </Box>
            <Button
              sx={{
                background: "#210A01",
                boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                color: "white",
                width: "80%",
                padding: "10px",
                borderRadius: "20px",
                border: ["1px solid #FFA228"],
                fontWeight: "bold",
                "&:hover": {
                  background: "linear-gradient(to right, #FF6432, #FFA228)",
                },
              }}
            >
              + Ingridients
            </Button>
            <Box
              sx={{
                width: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ fontSize: "30px" }}>8,35$</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Button
                  sx={{
                    background: "#210A01",
                    boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                    border: ["1px solid"],
                    color: "white",
                    padding: "10px",
                    borderRadius: "20px",
                    fontWeight: "bold",
                    "&:hover": {
                      background: "linear-gradient(to right, #FF6432, #FFA228)",
                    },
                  }}
                >
                  -
                </Button>
                <Typography sx={{ fontSize: "20px" }}>1</Typography>
                <Button
                  sx={{
                    background: "#210A01",
                    boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                    border: ["1px solid"],
                    color: "white",
                    padding: "10px",
                    borderRadius: "20px",
                    fontWeight: "bold",
                    "&:hover": {
                      background: "linear-gradient(to right, #FF6432, #FFA228)",
                    },
                  }}
                >
                  +
                </Button>
              </Box>
            </Box>
            <Button
              sx={{
                background: "#210A01",
                boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                color: "white",
                width: "80%",
                padding: "10px",
                borderRadius: "20px",
                border: ["1px solid #FFA228"],
                fontWeight: "bold",
                "&:hover": {
                  background: "linear-gradient(to right, #FF6432, #FFA228)",
                },
              }}
            >
              Order Now
            </Button>
          </Box>
          {/* /////////////// */}
          <Box
            sx={{
              backgroundColor: "#210A01",
              paddingTop: "10px",
              width: { xs: "90%", md: "23%" },
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              paddingTop: "100px",
              paddingBottom: "10px",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src="/pizza 3.png"
              alt="pizza"
              sx={{ position: "absolute", top: "-100px" }}
            />
            <Typography sx={{ fontSize: "30px" }}>Venecia</Typography>
            <Typography sx={{ fontSize: "15px", color: "#A3A3A3" }}>
              Filling: onion, potato, tomato, <br /> mushrooms, cheese, olives,
              meat...
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Button
                sx={{
                  background: "#210A01",
                  boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                  border: ["1px solid"],
                  color: "white",
                  padding: "10px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(to right, #FF6432, #FFA228)",
                  },
                }}
              >
                20
              </Button>
              <Button
                sx={{
                  background: "#210A01",
                  boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                  border: ["1px solid"],
                  color: "white",
                  padding: "10px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(to right, #FF6432, #FFA228)",
                  },
                }}
              >
                28
              </Button>
              <Button
                sx={{
                  background: "#210A01",
                  boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                  border: ["1px solid"],
                  color: "white",
                  padding: "10px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(to right, #FF6432, #FFA228)",
                  },
                }}
              >
                33
              </Button>
            </Box>
            <Button
              sx={{
                background: "#210A01",
                boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                color: "white",
                width: "80%",
                padding: "10px",
                borderRadius: "20px",
                border: ["1px solid #FFA228"],
                fontWeight: "bold",
                "&:hover": {
                  background: "linear-gradient(to right, #FF6432, #FFA228)",
                },
              }}
            >
              + Ingridients
            </Button>
            <Box
              sx={{
                width: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ fontSize: "30px" }}>7,35$</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Button
                  sx={{
                    background: "#210A01",
                    boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                    border: ["1px solid"],
                    color: "white",
                    padding: "10px",
                    borderRadius: "20px",
                    fontWeight: "bold",
                    "&:hover": {
                      background: "linear-gradient(to right, #FF6432, #FFA228)",
                    },
                  }}
                >
                  -
                </Button>
                <Typography sx={{ fontSize: "20px" }}>1</Typography>
                <Button
                  sx={{
                    background: "#210A01",
                    boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                    border: ["1px solid"],
                    color: "white",
                    padding: "10px",
                    borderRadius: "20px",
                    fontWeight: "bold",
                    "&:hover": {
                      background: "linear-gradient(to right, #FF6432, #FFA228)",
                    },
                  }}
                >
                  +
                </Button>
              </Box>
            </Box>
            <Button
              sx={{
                background: "#210A01",
                boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                color: "white",
                width: "80%",
                padding: "10px",
                borderRadius: "20px",
                border: ["1px solid #FFA228"],
                fontWeight: "bold",
                "&:hover": {
                  background: "linear-gradient(to right, #FF6432, #FFA228)",
                },
              }}
            >
              Order Now
            </Button>
          </Box>
          <Box
            sx={{
              backgroundColor: "#210A01",
              paddingTop: "10px",
              width: { xs: "90%", md: "23%" },
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              paddingTop: "100px",
              paddingBottom: "10px",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src="/pizza 4.png"
              alt="pizza"
              sx={{ position: "absolute", top: "-100px" }}
            />
            <Typography sx={{ fontSize: "30px" }}>Meat</Typography>
            <Typography sx={{ fontSize: "15px", color: "#A3A3A3" }}>
              Filling: onion, potato, tomato, <br /> mushrooms, cheese, olives,
              meat...
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Button
                sx={{
                  background: "#210A01",
                  boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                  border: ["1px solid"],
                  color: "white",
                  padding: "10px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(to right, #FF6432, #FFA228)",
                  },
                }}
              >
                20
              </Button>
              <Button
                sx={{
                  background: "#210A01",
                  boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                  border: ["1px solid"],
                  color: "white",
                  padding: "10px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(to right, #FF6432, #FFA228)",
                  },
                }}
              >
                28
              </Button>
              <Button
                sx={{
                  background: "#210A01",
                  boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                  border: ["1px solid"],
                  color: "white",
                  padding: "10px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(to right, #FF6432, #FFA228)",
                  },
                }}
              >
                33
              </Button>
            </Box>
            <Button
              sx={{
                background: "#210A01",
                boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                color: "white",
                width: "80%",
                padding: "10px",
                borderRadius: "20px",
                border: ["1px solid #FFA228"],
                fontWeight: "bold",
                "&:hover": {
                  background: "linear-gradient(to right, #FF6432, #FFA228)",
                },
              }}
            >
              + Ingridients
            </Button>
            <Box
              sx={{
                width: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ fontSize: "30px" }}>9,35$</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Button
                  sx={{
                    background: "#210A01",
                    boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                    border: ["1px solid"],
                    color: "white",
                    padding: "10px",
                    borderRadius: "20px",
                    fontWeight: "bold",
                    "&:hover": {
                      background: "linear-gradient(to right, #FF6432, #FFA228)",
                    },
                  }}
                >
                  -
                </Button>
                <Typography sx={{ fontSize: "20px" }}>1</Typography>
                <Button
                  sx={{
                    background: "#210A01",
                    boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                    border: ["1px solid"],
                    color: "white",
                    padding: "10px",
                    borderRadius: "20px",
                    fontWeight: "bold",
                    "&:hover": {
                      background: "linear-gradient(to right, #FF6432, #FFA228)",
                    },
                  }}
                >
                  +
                </Button>
              </Box>
            </Box>
            <Button
              sx={{
                background: "#210A01",
                boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                color: "white",
                width: "80%",
                padding: "10px",
                borderRadius: "20px",
                border: ["1px solid #FFA228"],
                fontWeight: "bold",
                "&:hover": {
                  background: "linear-gradient(to right, #FF6432, #FFA228)",
                },
              }}
            >
              Order Now
            </Button>
          </Box>
          <Box
            sx={{
              backgroundColor: "#210A01",
              paddingTop: "10px",
              width: { xs: "90%", md: "23%" },
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              paddingTop: "100px",
              paddingBottom: "10px",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src="/pizza 5.png"
              alt="pizza"
              sx={{ position: "absolute", top: "-100px" }}
            />
            <Typography sx={{ fontSize: "30px" }}>Cheese</Typography>
            <Typography sx={{ fontSize: "15px", color: "#A3A3A3" }}>
              Filling: onion, potato, tomato, <br /> mushrooms, cheese, olives,
              meat...
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Button
                sx={{
                  background: "#210A01",
                  boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                  border: ["1px solid"],
                  color: "white",
                  padding: "10px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(to right, #FF6432, #FFA228)",
                  },
                }}
              >
                20
              </Button>
              <Button
                sx={{
                  background: "#210A01",
                  boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                  border: ["1px solid"],
                  color: "white",
                  padding: "10px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(to right, #FF6432, #FFA228)",
                  },
                }}
              >
                28
              </Button>
              <Button
                sx={{
                  background: "#210A01",
                  boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                  border: ["1px solid"],
                  color: "white",
                  padding: "10px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(to right, #FF6432, #FFA228)",
                  },
                }}
              >
                33
              </Button>
            </Box>
            <Button
              sx={{
                background: "#210A01",
                boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                color: "white",
                width: "80%",
                padding: "10px",
                borderRadius: "20px",
                border: ["1px solid #FFA228"],
                fontWeight: "bold",
                "&:hover": {
                  background: "linear-gradient(to right, #FF6432, #FFA228)",
                },
              }}
            >
              + Ingridients
            </Button>
            <Box
              sx={{
                width: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ fontSize: "30px" }}>9,35$</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Button
                  sx={{
                    background: "#210A01",
                    boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                    border: ["1px solid"],
                    color: "white",
                    padding: "10px",
                    borderRadius: "20px",
                    fontWeight: "bold",
                    "&:hover": {
                      background: "linear-gradient(to right, #FF6432, #FFA228)",
                    },
                  }}
                >
                  -
                </Button>
                <Typography sx={{ fontSize: "20px" }}>1</Typography>
                <Button
                  sx={{
                    background: "#210A01",
                    boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                    border: ["1px solid"],
                    color: "white",
                    padding: "10px",
                    borderRadius: "20px",
                    fontWeight: "bold",
                    "&:hover": {
                      background: "linear-gradient(to right, #FF6432, #FFA228)",
                    },
                  }}
                >
                  +
                </Button>
              </Box>
            </Box>
            <Button
              sx={{
                background: "#210A01",
                boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                color: "white",
                width: "80%",
                padding: "10px",
                borderRadius: "20px",
                border: ["1px solid #FFA228"],
                fontWeight: "bold",
                "&:hover": {
                  background: "linear-gradient(to right, #FF6432, #FFA228)",
                },
              }}
            >
              Order Now
            </Button>
          </Box>
        </Box>
        {/* /////////// */}
      </Box>
      <Box
        sx={{
          height: "300px",
          backgroundImage: `url(/backImage.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginTop: "50px",
          marginBottom: "50px",
          borderRadius: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: { xs: "20px", md: "40px" } }}>
          MOST POPULAR PIZZA
        </Typography>
      </Box>
      <Box
        sx={{
          paddingTop: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-between" },
          gap: { xs: "100px", md: "1px" },
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#210A01",
            paddingTop: "10px",
            width: { xs: "90%", md: "23%" },
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            paddingTop: "100px",
            paddingBottom: "10px",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src="/pizza 2.png"
            alt="pizza"
            sx={{ position: "absolute", top: "-100px" }}
          />
          <Typography sx={{ fontSize: "30px" }}>Italian</Typography>
          <Typography sx={{ fontSize: "15px", color: "#A3A3A3" }}>
            Filling: onion, potato, tomato, <br /> mushrooms, cheese, olives,
            meat...
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Button
              sx={{
                background: "#210A01",
                boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                border: ["1px solid"],
                color: "white",
                padding: "10px",
                borderRadius: "20px",
                fontWeight: "bold",
                "&:hover": {
                  background: "linear-gradient(to right, #FF6432, #FFA228)",
                },
              }}
            >
              20
            </Button>
            <Button
              sx={{
                background: "#210A01",
                boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                border: ["1px solid"],
                color: "white",
                padding: "10px",
                borderRadius: "20px",
                fontWeight: "bold",
                "&:hover": {
                  background: "linear-gradient(to right, #FF6432, #FFA228)",
                },
              }}
            >
              28
            </Button>
            <Button
              sx={{
                background: "#210A01",
                boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                border: ["1px solid"],
                color: "white",
                padding: "10px",
                borderRadius: "20px",
                fontWeight: "bold",
                "&:hover": {
                  background: "linear-gradient(to right, #FF6432, #FFA228)",
                },
              }}
            >
              33
            </Button>
          </Box>
          <Button
            sx={{
              background: "#210A01",
              boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
              color: "white",
              width: "80%",
              padding: "10px",
              borderRadius: "20px",
              border: ["1px solid #FFA228"],
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(to right, #FF6432, #FFA228)",
              },
            }}
          >
            + Ingridients
          </Button>
          <Box
            sx={{
              width: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontSize: "30px" }}>8,35$</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Button
                sx={{
                  background: "#210A01",
                  boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                  border: ["1px solid"],
                  color: "white",
                  padding: "10px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(to right, #FF6432, #FFA228)",
                  },
                }}
              >
                -
              </Button>
              <Typography sx={{ fontSize: "20px" }}>1</Typography>
              <Button
                sx={{
                  background: "#210A01",
                  boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                  border: ["1px solid"],
                  color: "white",
                  padding: "10px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(to right, #FF6432, #FFA228)",
                  },
                }}
              >
                +
              </Button>
            </Box>
          </Box>
          <Button
            sx={{
              background: "#210A01",
              boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
              color: "white",
              width: "80%",
              padding: "10px",
              borderRadius: "20px",
              border: ["1px solid #FFA228"],
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(to right, #FF6432, #FFA228)",
              },
            }}
          >
            Order Now
          </Button>
        </Box>
        {/* /////////////// */}
        <Box
          sx={{
            backgroundColor: "#210A01",
            paddingTop: "10px",
            width: { xs: "90%", md: "23%" },
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            paddingTop: "100px",
            paddingBottom: "10px",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src="/pizza 3.png"
            alt="pizza"
            sx={{ position: "absolute", top: "-100px" }}
          />
          <Typography sx={{ fontSize: "30px" }}>Venecia</Typography>
          <Typography sx={{ fontSize: "15px", color: "#A3A3A3" }}>
            Filling: onion, potato, tomato, <br /> mushrooms, cheese, olives,
            meat...
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Button
              sx={{
                background: "#210A01",
                boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                border: ["1px solid"],
                color: "white",
                padding: "10px",
                borderRadius: "20px",
                fontWeight: "bold",
                "&:hover": {
                  background: "linear-gradient(to right, #FF6432, #FFA228)",
                },
              }}
            >
              20
            </Button>
            <Button
              sx={{
                background: "#210A01",
                boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                border: ["1px solid"],
                color: "white",
                padding: "10px",
                borderRadius: "20px",
                fontWeight: "bold",
                "&:hover": {
                  background: "linear-gradient(to right, #FF6432, #FFA228)",
                },
              }}
            >
              28
            </Button>
            <Button
              sx={{
                background: "#210A01",
                boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                border: ["1px solid"],
                color: "white",
                padding: "10px",
                borderRadius: "20px",
                fontWeight: "bold",
                "&:hover": {
                  background: "linear-gradient(to right, #FF6432, #FFA228)",
                },
              }}
            >
              33
            </Button>
          </Box>
          <Button
            sx={{
              background: "#210A01",
              boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
              color: "white",
              width: "80%",
              padding: "10px",
              borderRadius: "20px",
              border: ["1px solid #FFA228"],
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(to right, #FF6432, #FFA228)",
              },
            }}
          >
            + Ingridients
          </Button>
          <Box
            sx={{
              width: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontSize: "30px" }}>7,35$</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Button
                sx={{
                  background: "#210A01",
                  boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                  border: ["1px solid"],
                  color: "white",
                  padding: "10px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(to right, #FF6432, #FFA228)",
                  },
                }}
              >
                -
              </Button>
              <Typography sx={{ fontSize: "20px" }}>1</Typography>
              <Button
                sx={{
                  background: "#210A01",
                  boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                  border: ["1px solid"],
                  color: "white",
                  padding: "10px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(to right, #FF6432, #FFA228)",
                  },
                }}
              >
                +
              </Button>
            </Box>
          </Box>
          <Button
            sx={{
              background: "#210A01",
              boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
              color: "white",
              width: "80%",
              padding: "10px",
              borderRadius: "20px",
              border: ["1px solid #FFA228"],
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(to right, #FF6432, #FFA228)",
              },
            }}
          >
            Order Now
          </Button>
        </Box>
        <Box
          sx={{
            backgroundColor: "#210A01",
            paddingTop: "10px",
            width: { xs: "90%", md: "23%" },
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            paddingTop: "100px",
            paddingBottom: "10px",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src="/pizza 4.png"
            alt="pizza"
            sx={{ position: "absolute", top: "-100px" }}
          />
          <Typography sx={{ fontSize: "30px" }}>Meat</Typography>
          <Typography sx={{ fontSize: "15px", color: "#A3A3A3" }}>
            Filling: onion, potato, tomato, <br /> mushrooms, cheese, olives,
            meat...
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Button
              sx={{
                background: "#210A01",
                boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                border: ["1px solid"],
                color: "white",
                padding: "10px",
                borderRadius: "20px",
                fontWeight: "bold",
                "&:hover": {
                  background: "linear-gradient(to right, #FF6432, #FFA228)",
                },
              }}
            >
              20
            </Button>
            <Button
              sx={{
                background: "#210A01",
                boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                border: ["1px solid"],
                color: "white",
                padding: "10px",
                borderRadius: "20px",
                fontWeight: "bold",
                "&:hover": {
                  background: "linear-gradient(to right, #FF6432, #FFA228)",
                },
              }}
            >
              28
            </Button>
            <Button
              sx={{
                background: "#210A01",
                boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                border: ["1px solid"],
                color: "white",
                padding: "10px",
                borderRadius: "20px",
                fontWeight: "bold",
                "&:hover": {
                  background: "linear-gradient(to right, #FF6432, #FFA228)",
                },
              }}
            >
              33
            </Button>
          </Box>
          <Button
            sx={{
              background: "#210A01",
              boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
              color: "white",
              width: "80%",
              padding: "10px",
              borderRadius: "20px",
              border: ["1px solid #FFA228"],
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(to right, #FF6432, #FFA228)",
              },
            }}
          >
            + Ingridients
          </Button>
          <Box
            sx={{
              width: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontSize: "30px" }}>9,35$</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Button
                sx={{
                  background: "#210A01",
                  boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                  border: ["1px solid"],
                  color: "white",
                  padding: "10px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(to right, #FF6432, #FFA228)",
                  },
                }}
              >
                -
              </Button>
              <Typography sx={{ fontSize: "20px" }}>1</Typography>
              <Button
                sx={{
                  background: "#210A01",
                  boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                  border: ["1px solid"],
                  color: "white",
                  padding: "10px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(to right, #FF6432, #FFA228)",
                  },
                }}
              >
                +
              </Button>
            </Box>
          </Box>
          <Button
            sx={{
              background: "#210A01",
              boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
              color: "white",
              width: "80%",
              padding: "10px",
              borderRadius: "20px",
              border: ["1px solid #FFA228"],
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(to right, #FF6432, #FFA228)",
              },
            }}
          >
            Order Now
          </Button>
        </Box>
        <Box
          sx={{
            backgroundColor: "#210A01",
            paddingTop: "10px",
            width: { xs: "90%", md: "23%" },
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            paddingTop: "100px",
            paddingBottom: "10px",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src="/pizza 5.png"
            alt="pizza"
            sx={{ position: "absolute", top: "-100px" }}
          />
          <Typography sx={{ fontSize: "30px" }}>Cheese</Typography>
          <Typography sx={{ fontSize: "15px", color: "#A3A3A3" }}>
            Filling: onion, potato, tomato, <br /> mushrooms, cheese, olives,
            meat...
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Button
              sx={{
                background: "#210A01",
                boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                border: ["1px solid"],
                color: "white",
                padding: "10px",
                borderRadius: "20px",
                fontWeight: "bold",
                "&:hover": {
                  background: "linear-gradient(to right, #FF6432, #FFA228)",
                },
              }}
            >
              20
            </Button>
            <Button
              sx={{
                background: "#210A01",
                boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                border: ["1px solid"],
                color: "white",
                padding: "10px",
                borderRadius: "20px",
                fontWeight: "bold",
                "&:hover": {
                  background: "linear-gradient(to right, #FF6432, #FFA228)",
                },
              }}
            >
              28
            </Button>
            <Button
              sx={{
                background: "#210A01",
                boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                border: ["1px solid"],
                color: "white",
                padding: "10px",
                borderRadius: "20px",
                fontWeight: "bold",
                "&:hover": {
                  background: "linear-gradient(to right, #FF6432, #FFA228)",
                },
              }}
            >
              33
            </Button>
          </Box>
          <Button
            sx={{
              background: "#210A01",
              boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
              color: "white",
              width: "80%",
              padding: "10px",
              borderRadius: "20px",
              border: ["1px solid #FFA228"],
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(to right, #FF6432, #FFA228)",
              },
            }}
          >
            + Ingridients
          </Button>
          <Box
            sx={{
              width: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontSize: "30px" }}>9,35$</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Button
                sx={{
                  background: "#210A01",
                  boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                  border: ["1px solid"],
                  color: "white",
                  padding: "10px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(to right, #FF6432, #FFA228)",
                  },
                }}
              >
                -
              </Button>
              <Typography sx={{ fontSize: "20px" }}>1</Typography>
              <Button
                sx={{
                  background: "#210A01",
                  boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
                  border: ["1px solid"],
                  color: "white",
                  padding: "10px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(to right, #FF6432, #FFA228)",
                  },
                }}
              >
                +
              </Button>
            </Box>
          </Box>
          <Button
            sx={{
              background: "#210A01",
              boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
              color: "white",
              width: "80%",
              padding: "10px",
              borderRadius: "20px",
              border: ["1px solid #FFA228"],
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(to right, #FF6432, #FFA228)",
              },
            }}
          >
            Order Now
          </Button>
        </Box>
      </Box>
      {/* ////////////// */}
      <Box
        sx={{
          marginTop: "50px",
          marginBottom: "50px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "space-between" },
          gap: "20px",
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", md: "32%" },
            height: "250px",
            backgroundImage: `url(/backImage.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "space-evenly",
          }}
        >
          <Typography sx={{ fontSize: "30px" }}>
            HOW WE <br /> COOKING
          </Typography>
          <Button
            sx={{
              background: "transparent",
              boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
              color: "white",
              width: "50%",
              padding: "10px",
              borderRadius: "20px",
              border: ["1px solid #FFA228"],
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(to right, #FF6432, #FFA228)",
              },
            }}
          >
            More
          </Button>
        </Box>
        <Box
          sx={{
            width: { xs: "90%", md: "32%" },
            height: "250px",
            backgroundImage: `url(/backImage2.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "space-evenly",
          }}
        >
          <Typography sx={{ fontSize: "30px" }}>OUR BLOG</Typography>
          <Button
            sx={{
              background: "transparent",
              boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
              color: "white",
              width: "50%",
              padding: "10px",
              borderRadius: "20px",
              border: ["1px solid #FFA228"],
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(to right, #FF6432, #FFA228)",
              },
            }}
          >
            More
          </Button>
        </Box>
        <Box
          sx={{
            width: { xs: "90%", md: "32%" },
            height: "250px",
            borderRadius: "20px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            justifyContent: "space-evenly",
          }}
        >
          <Typography sx={{ fontSize: "50px", fontWeight: "bold" }}>
            Events
          </Typography>
          <Typography sx={{ textAlign: "end", fontSize: "20px" }}>
            There are regular events in our pizzeria that will allow you to eat
            delicious food for a lower price!
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "90%", md: "48%" },
            height: "250px",
            backgroundImage: `url(/backImage3.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "space-evenly",
          }}
        >
          <Typography sx={{ fontSize: "30px" }}>
            TWO PIZZA <br /> FOR 1 PRICE
          </Typography>
          <Button
            sx={{
              background: "transparent",
              boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
              color: "white",
              width: "50%",
              padding: "10px",
              borderRadius: "20px",
              border: ["1px solid #FFA228"],
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(to right, #FF6432, #FFA228)",
              },
            }}
          >
            More
          </Button>
        </Box>
        <Box
          sx={{
            width: { xs: "90%", md: "48%" },
            height: "250px",
            backgroundImage: `url(/backImage4.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "space-evenly",
          }}
        >
          <Typography sx={{ fontSize: "30px" }}>
            KITCHEN <br /> TOUR
          </Typography>
          <Button
            sx={{
              background: "transparent",
              boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
              color: "white",
              width: "50%",
              padding: "10px",
              borderRadius: "20px",
              border: ["1px solid #FFA228"],
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(to right, #FF6432, #FFA228)",
              },
            }}
          >
            More
          </Button>
        </Box>
        <Box
          sx={{
            width: { xs: "90%", md: "32%" },
            height: "250px",
            backgroundImage: `url(/backImage5.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "space-evenly",
          }}
        >
          <Typography sx={{ fontSize: "30px" }}>
            FREE COFFEE <br /> FOR 3 PIZZA
          </Typography>
          <Button
            sx={{
              background: "transparent",
              boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
              color: "white",
              width: "50%",
              padding: "10px",
              borderRadius: "20px",
              border: ["1px solid #FFA228"],
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(to right, #FF6432, #FFA228)",
              },
            }}
          >
            More
          </Button>
        </Box>
        <Box
          sx={{
            width: { xs: "90%", md: "32%" },
            height: "250px",
            backgroundImage: `url(/backImage6.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "space-evenly",
          }}
        >
          <Typography sx={{ fontSize: "30px" }}>
            OUR <br /> INSTAGRAM
          </Typography>
          <Button
            sx={{
              background: "transparent",
              boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
              color: "white",
              width: "50%",
              padding: "10px",
              borderRadius: "20px",
              border: ["1px solid #FFA228"],
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(to right, #FF6432, #FFA228)",
              },
            }}
          >
            More
          </Button>
        </Box>
        <Box
          sx={{
            width: { xs: "90%", md: "32%" },
            height: "250px",
            backgroundImage: `url(/backImage7.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "space-evenly",
          }}
        >
          <Typography sx={{ fontSize: "30px" }}>
            WHERE ARE <br /> YOU CHOOSE <br /> US?
          </Typography>
          <Button
            sx={{
              background: "transparent",
              boxShadow: ["0px 0px 10px rgb(60, 19, 3)"],
              color: "white",
              width: "50%",
              padding: "10px",
              borderRadius: "20px",
              border: ["1px solid #FFA228"],
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(to right, #FF6432, #FFA228)",
              },
            }}
          >
            More
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "50px",
          alignItems: "center",
          width: { xs: "90%", md: "100%" },
          margin: "auto",
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <Box sx={{ width: { xs: "90%", md: "50%" } }}>
          <Typography sx={{ fontSize: { xs: "50px", md: "80px" } }}>
            About us
          </Typography>
          <Typography sx={{ color: "#A3A3A3", fontSize: "20px" }}>
            In just a couple of years, we have opened 6 outlets in different{" "}
            <br />
            cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the future{" "}
            <br />
            we plan to develop the network in other major cities of Russia.
          </Typography>
          <Box sx={{width : {xs : "100%" , md : "50%"}}} component="img" src="/pizzaEnd.png" />
          <Typography sx={{ color: "#A3A3A3", fontSize: "20px" }}>
            In just a couple of years, we have opened 6 outlets in different{" "}
            <br />
            cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the future{" "}
            <br />
            we plan to develop the network in other major cities of Russia.
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", md: "40%" },
            paddingTop: { xs: "70px", md: "5px" },
          }}
        >
          <Box
            component="img"
            src="/herroPizzaEnd.png"
            alt="hero"
            sx={{ width: "100%" }}
          />
          <Box
            component="img"
            src="/fries 1.png"
            alt="hero"
            sx={{
              position: "absolute",
              bottom: "0px",
              left: "-100px",
              width: "300px",
            }}
          />
          <Box
            component="img"
            src="/pizza 1.png"
            alt="hero"
            sx={{ position: "absolute", top: "-80px", right: "-10px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default page;
