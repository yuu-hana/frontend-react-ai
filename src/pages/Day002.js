import { Box, Typography, Paper, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

// 主容器
const RecipeContainer = styled(Paper)(({ theme }) => ({
  maxWidth: 600,
  margin: '0 auto',
  background: 'hsl(0, 0%, 100%)',
  borderRadius: 24,
  boxShadow: '0 2px 16px 0 rgba(0,0,0,0.04)',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    borderRadius: 0,
    boxShadow: 'none',
  },
}));

const RecipeImage = styled('img')(({ theme }) => ({
  width: '100%',
  display: 'block',
  [theme.breakpoints.down('sm')]: {
    borderRadius: 0,
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  padding: '40px 40px 0 40px',
  [theme.breakpoints.down('sm')]: {
    padding: '32px 16px 0 16px',
  },
}));

const RecipeTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Young Serif, serif',
  color: 'hsl(24, 5%, 18%)',
  fontWeight: 400,
  fontSize: 40,
  marginBottom: 24,
  [theme.breakpoints.down('sm')]: {
    fontSize: 32,
    marginBottom: 16,
  },
}));

const RecipeDescription = styled(Typography)(({ theme }) => ({
  fontFamily: 'Outfit, sans-serif',
  color: 'hsl(30, 10%, 34%)',
  fontSize: 16,
  marginBottom: 28,
  [theme.breakpoints.down('sm')]: {
    fontSize: 15,
    marginBottom: 20,
  },
}));

const PreparationTime = styled(Box)(({ theme }) => ({
  backgroundColor: 'hsl(330, 100%, 98%)',
  padding: '24px',
  borderRadius: 12,
  marginBottom: 32,
  boxShadow: '0 2px 8px 0 rgba(0,0,0,0.03)',
  [theme.breakpoints.down('sm')]: {
    padding: '18px 12px',
    marginBottom: 24,
  },
}));

const PrepTitle = styled(Typography)({
  color: 'hsl(332, 51%, 32%)',
  fontFamily: 'Outfit, sans-serif',
  fontWeight: 700,
  fontSize: 18,
  marginBottom: 10,
});

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Young Serif, serif',
  color: 'hsl(14, 45%, 36%)',
  fontWeight: 400,
  fontSize: 28,
  margin: '0 0 18px 0',
  [theme.breakpoints.down('sm')]: {
    fontSize: 20,
    margin: '0 0 12px 0',
  },
}));

const ListItem = styled('li')(({ theme }) => ({
  fontFamily: 'Outfit, sans-serif',
  color: 'hsl(30, 10%, 34%)',
  fontSize: 16,
  marginBottom: 8,
  paddingLeft: 8,
  [theme.breakpoints.down('sm')]: {
    fontSize: 15,
    marginBottom: 6,
  },
}));

const NumberedItem = styled('li')(({ theme }) => ({
  fontFamily: 'Outfit, sans-serif',
  color: 'hsl(30, 10%, 34%)',
  fontSize: 16,
  marginBottom: 16,
  paddingLeft: 8,
  [theme.breakpoints.down('sm')]: {
    fontSize: 15,
    marginBottom: 12,
  },
  '& strong': {
    color: 'hsl(14, 45%, 36%)',
    fontWeight: 700,
  },
}));

const NutritionTable = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  rowGap: 12,
  fontSize: 16,
  [theme.breakpoints.down('sm')]: {
    fontSize: 15,
    rowGap: 10,
  },
  '& .nutrient': {
    color: 'hsl(30, 10%, 34%)',
    fontFamily: 'Outfit, sans-serif',
  },
  '& .value': {
    color: 'hsl(14, 45%, 36%)',
    fontWeight: 700,
    fontFamily: 'Outfit, sans-serif',
  },
}));

export default function Day002() {
  return (
    <Box sx={{ background: 'hsl(30, 54%, 90%)', minHeight: '100vh', py: { xs: 0, sm: 6 } }}>
      <RecipeContainer elevation={0}>
        <RecipeImage 
          src="/assets/002/image-omelette.jpeg" 
          alt="Simple Omelette Recipe"
        />
        <ContentBox>
          <RecipeTitle>
            Simple Omelette Recipe
          </RecipeTitle>
          <RecipeDescription>
            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
            to perfection, optionally filled with your choice of cheese, vegetables, or meats.
          </RecipeDescription>

          <PreparationTime>
            <PrepTitle>Preparation time</PrepTitle>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              <ListItem><b>Total:</b> Approximately 10 minutes</ListItem>
              <ListItem><b>Preparation:</b> 5 minutes</ListItem>
              <ListItem><b>Cooking:</b> 5 minutes</ListItem>
            </ul>
          </PreparationTime>

          <SectionTitle>Ingredients</SectionTitle>
          <ul style={{ margin: 0, paddingLeft: 18, marginBottom: 24 }}>
            <ListItem>2-3 large eggs</ListItem>
            <ListItem>Salt, to taste</ListItem>
            <ListItem>Pepper, to taste</ListItem>
            <ListItem>1 tablespoon of butter or oil</ListItem>
            <ListItem>Optional fillings: cheese, diced vegetables, cooked meats, herbs</ListItem>
          </ul>

          <Divider sx={{ my: { xs: 2, sm: 3 }, borderColor: 'hsl(30, 18%, 87%)' }} />

          <SectionTitle>Instructions</SectionTitle>
          <ol style={{ margin: 0, paddingLeft: 18, marginBottom: 24 }}>
            <NumberedItem><strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</NumberedItem>
            <NumberedItem><strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.</NumberedItem>
            <NumberedItem><strong>Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</NumberedItem>
            <NumberedItem><strong>Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</NumberedItem>
            <NumberedItem><strong>Fold and serve:</strong> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</NumberedItem>
            <NumberedItem><strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.</NumberedItem>
          </ol>

          <Divider sx={{ my: { xs: 2, sm: 3 }, borderColor: 'hsl(30, 18%, 87%)' }} />

          <SectionTitle>Nutrition</SectionTitle>
          <Typography variant="body1" sx={{ mb: 2, fontSize: { xs: 15, sm: 16 } }}>
            The table below shows nutritional values per serving without the additional fillings.
          </Typography>
          <NutritionTable>
            <span className="nutrient">Calories</span>
            <span className="value">277kcal</span>
            <span className="nutrient">Carbs</span>
            <span className="value">0g</span>
            <span className="nutrient">Protein</span>
            <span className="value">20g</span>
            <span className="nutrient">Fat</span>
            <span className="value">22g</span>
          </NutritionTable>
        </ContentBox>
      </RecipeContainer>
    </Box>
  );
} 